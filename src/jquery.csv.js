/**
 * jQuery-csv (jQuery Plugin)
 * version: 0.64 (2012-10-06)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Acknowledgements:
 * This plugin was originally designed to assist in parsing CSV files loaded
 * from client-side javascript. It's influenced by jQuery.json and the original
 *
 * The original core RegEx comes directly from the following answer posted by a
 * StackOverflow.com user named Ridgerunner.
 * Source:
 * - http://stackoverflow.com/q/8493195/290340
 *
 * A special thanks goes out to rwk@acm.org for providing a lot of valuable
 * feedback to the project including the core for the new FSM
 * (Finite State Machine) parser. If you're looking for a stable TSV parser
 * take a look at jquery-tsv (http://code.google.com/p/jquery-tsv/).
 *
 * Experimental:
 * A new line splitting function has been added that can properly handle values
 * that contain newlines. To enable it, set the experimental parameter to true
 * in the options.

 * For legal purposes I'll include the "NO WARRANTY EXPRESSED OR IMPLIED.
 * USE AT YOUR OWN RISK.". Which, in 'layman's terms' means, by using this
 * library you are accepting responsibility if it breaks your code.
 *
 * Legal jargon aside, I will do my best to provide a useful and stable core
 * that can effectively be built on.
 *
 * Copyrighted 2012 by Evan Plaice.
 */

RegExp.escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

(function( $ ) {
  'use strict'
  /**
   * jQuery.csv.defaults
   * Encapsulates the method paramater defaults for the CSV plugin module.
   */

  $.csv = {
    defaults: {
      separator:',',
      delimiter:'"',
      headerLine:1,
      dataLine:2
    },

    hooks: {
      castToScalar: function(value, state) {
        var hasDot = /\./;
        if (isNaN(value)) {
          return value;
        } else {
          if (hasDot.test(value)) {
            return parseFloat(value);
          } else {
            var integer = parseInt(value);
            if(isNaN(integer)) {
              return 0;
            } else {
              return integer;
            }
          }
        }
      }
    },

    parsers: {
      splitLines: function(csv, options) {
        // set the initial state
        var entries = [];
        var state = 0;
        var entry = "";

        function endOfLine() {
          // push out the parsed entry
          if(options.onParseEntry === undefined) {
            entries.push(entry);
          } else {
            var hookVal = options.onParseEntry(entry, options.state); // onParseEntry Hook
            if(hookVal !== false) {
              entries.push(hookVal);
            }
          }
          // clear the state
          entry = "";
          state = 0;
          options.state.rowNum++;
        }

        csv.replace(/(\"|,|\n|\r|[^\",\r\n]+)/gm, function (m0){
          switch (state) {
            // the start of a value/entry
            case 0:
              if (m0 === ",") {
                entry += m0;
                state = 0;
              } else if (m0 === "\"") {
                entry += m0;
                state = 1;
              } else if (m0 === "\n") {
                endOfLine();
              } else if (/^\r$/.test(m0)) {
                // carriage returns are ignored
              } else {
                entry += m0;
                state = 3;
              }
              break;
            // delimited input
            case 1:
              if (m0 === "\"") {
                entry += m0;
                state = 2;
              } else {
                entry += m0;
                state = 1;
              }
              break;
            // delimiter found in delimited input
            case 2:
              // is the delimiter escaped?
              var prevChar = entry.substr(entry.length - 1);
              if (m0 === "\"" && prevChar === "\"") {
                entry += m0;
                state = 1;
              } else if (m0 === ",") {
                entry += m0;
                state = 0;
              } else if (m0 === "\n") {
                endOfLine();
              } else if (m0 === "\r") {
              } else {
                throw new Error("CSVDataError: Illegal state [Row:" + options.state.rowNum + "]");
              }
              break;
            // un-delimited input
            case 3:
              if (m0 === ",") {
                entry += m0;
                state = 0;
              } else if (m0 === "\"") {
                throw new Error("CSVDataError: Illegal quote [Row:" + options.state.rowNum + "]");
              } else if (m0 === "\n") {
                endOfLine();
              } else if (m0 === "\r") {
                // Ignore
              } else {
                throw new Error("CSVDataError: Illegal data [Row:" + options.state.rowNum + "]");
              }
                break;
            default:
              throw new Error("CSVDataError: Unknown state [Row:" + options.state.rowNum + "]");
          }
          return "";
        });

        // submit the last entry
        endOfLine();

        return entries;
      },

      parseEntry: function(csv, options) {
        // set the initial state
        var entry = [];
        var state = 0;
        var value = "";

        function endOfValue() {
          // push out the parsed value
          if(options.onParseValue === undefined) {
            entry.push(value);
          } else {
            var hook = options.onParseValue(value, options.state); // onParseValue Hook
            if(hook !== false) {
              entry.push(hook);
            }
          }
          // clear the state
          value = "";
          state = 0;
          options.state.colNum++;
        }

        csv.replace(/(\"|,|\n|\r|[^\",\r\n]+)/gm, function (m0){
          switch (state) {
            // the start of a value
            case 0:
              if (m0 === ",") {
                value += '';
                endOfValue();
              } else if (m0 === "\"") {
                state = 1;
              } else if (m0 === "\n" || /^\r$/.test(m0)) {
                return '';
              } else {
                value += m0;
                state = 3;
              }
              break;
            // delimited input
            case 1:
              if (m0 === "\"") {
                state = 2;
              } else {
                value += m0;
                state = 1;
              }
              break;
            // delimiter found in delimited input
            case 2:
              // is the delimiter escaped?
              if (m0 === "\"") {
                value += m0;
                state = 1;
              } else if (m0 === ",") {
                endOfValue();
              } else if (m0 === "\r" || m0 === "\n") {
                return '';
              } else {
                throw new Error("CSVDataError: Illegal State [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
              }
              break;
            // un-delimited input
            case 3:
              if (m0 === ",") {
                endOfValue();
              } else if (m0 === "\"") {
                throw new Error("CSVDataError: Illegal Quote [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
              } else if (m0 === "\n" || m0 === "\r") {
                return '';
              } else {
                throw new Error("CSVDataError: Illegal Data [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
              }
                break;
            default:
              throw new Error("CSVDataError: Unknown State [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
          }
          //console.log("val:" + m0 + " state:" + state);
          return "";
        });

        // submit the last value
        endOfValue();

        return entry;
      }
    },

    /**
     * $.csv.toArray(csv)
     * Converts a CSV entry string to a javascript array.
     *
     * @param {Array} csv The string containing the CSV data.
     * @param {Object} [options] An object containing user-defined options.
     * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
     * @param {Character} [delimiter] An override for the delimiter character. Defaults to a double-quote(").
     *
     * This method deals with simple CSV strings only. It's useful if you only
     * need to parse a single entry. If you need to parse more than one line,
     * use $.csv2Array instead.
     */
    toArray: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? RegExp.escape(options.separator) : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? RegExp.escape(options.delimiter) : $.csv.defaults.delimiter;
      var state = (options.state !== undefined ? options.state : {});

      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        state: state
      }

      var entry = $.csv.parsers.parseEntry(csv, options);

      // push the value to a callback if one is defined
      if(!config.callback) {
        return entry;
      } else {
        config.callback('', entry);
      }
    },

    /**
     * $.csv.toArrays(csv)
     * Converts a CSV string to a javascript array.
     *
     * @param {String} csv The string containing the raw CSV data.
     * @param {Object} [options] An object containing user-defined options.
     * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
     * @param {Character} [delimiter] An override for the delimiter character. Defaults to a double-quote(").
     *
     * This method deals with multi-line CSV. The breakdown is simple. The first
     * dimension of the array represents the line (or entry/row) while the second
     * dimension contains the values (or values/columns).
     */
    toArrays: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;

      var lines = [];
      var output = [];

      var state = {
        rowNum:1,
        colNum:1,
      }

      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        state: state
      };

      // break the data down to lines
      lines = $.csv.parsers.splitLines(csv, options);
      //console.log(lines);

      for(var i=0, len=lines.length; i<len; i++) {
        // check for empty last line, ignore if found
        if(i === (len - 1) && lines[i] === '') {
          break;
        }
        // process each value
        var entry = $.csv.toArray(lines[i], options);
        output.push(entry);
      }

      // push the value to a callback if one is defined
      if(!config.callback) {
        return output;
      } else {
        config.callback("", output);
      }
    },

    /**
     * $.csv.toObjects(csv)
     * Converts a CSV string to a javascript object.
     * @param {String} csv The string containing the raw CSV data.
     * @param {Object} [options] An object containing user-defined options.
     * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
     * @param {Character} [delimiter] An override for the delimiter character. Defaults to a double-quote(").
     * @param {Integer} [headerLine] The line in the file that contains the header data. Defaults to 1 (1-based counting).
     * @param {Integer} [dataLine] The line where the data values start. Defaults to 2 (1-based counting).
     *
     * This method deals with multi-line CSV strings. Where the headers line is
     * used as the key for each value per entry.
     */
    toObjects: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      config.headerLine = 'headerLine' in options ? options.headerLine : $.csv.defaults.headerLine;
      config.dataLine = 'dataLine' in options ? options.dataLine : $.csv.defaults.dataLine;

      var lines = [];
      var output = [];

      var state = {
        rowNum:1,
        colNum:2,
      };

      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        state: state
      };

      // break the data down to lines
      lines = $.csv.parsers.splitLines(csv, options);

      // fetch the headers
      var headers = $.csv.toArray(lines[(config.headerLine - 1)]);
      // process the data
      for(var i=0, len=lines.length; i<len; i++) {
        if(i < (config.dataLine - 1)) {
          continue;
        }
        // check for empty last line, ignore if found
        if(i === (len - 1) && lines[i] === '') {
          break;
        }
        // process each value
        var entry = $.csv.toArray(lines[i], options);
        var object = {};
        for(var j in headers) {
          object[headers[j]] = entry[j];
        }
        output.push(object);
      }

      // push the value to a callback if one is defined
      if(!config.callback) {
        return output;
      } else {
        config.callback("", output);
      }
    },

     /**
     * $.csv.fromArrays(arrays)
     * Converts a javascript array to a CSV String.
     *
     * @param {Array} array An array containing an array of CSV entries.
     * @param {Object} [options] An object containing user-defined options.
     * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
     * @param {Character} [delimiter] An override for the delimiter character. Defaults to a double-quote(").
     *
     * This method generates a CSV file from an array of arrays (representing entries).
     */
    fromArrays: function(arrays, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      config.escaper = 'escaper' in options ? options.escaper : $.csv.defaults.escaper;
      config.experimental = 'experimental' in options ? options.experimental : false;

      if(!config.experimental) {
        throw new Error("not implemented");
      }

      var output = [];
      for(i in arrays) {
        output.push(arrays[i]);
      }

      // push the value to a callback if one is defined
      if(!config.callback) {
        return output;
      } else {
        config.callback("", output);
      }
    },

    /**
     * $.csv.fromObjects(objects)
     * Converts a javascript dictionary to a CSV string.
     * @param {Object} objects An array of objects containing the data.
     * @param {Object} [options] An object containing user-defined options.
     * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
     * @param {Character} [delimiter] An override for the delimiter character. Defaults to a double-quote(").
     *
     * This method generates a CSV file from an array of objects (name:value pairs).
     * It starts by detecting the headers and adding them as the first line of
     * the CSV file, followed by a structured dump of the data.
     */
    fromObjects2CSV: function(objects, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      config.experimental = 'experimental' in options ? options.experimental : false;

      if(!config.experimental) {
        throw new Error("not implemented");
      }

      var output = [];
      for(i in objects) {
        output.push(arrays[i]);
      }

      // push the value to a callback if one is defined
      if(!config.callback) {
        return output;
      } else {
        config.callback("", output);
      }
    }
  };

  // Maintenance code to maintain backward-compatibility
  // Will be removed in release 1.0
  $.csvEntry2Array = $.csv.toArray;
  $.csv2Array = $.csv.toArrays;
  $.csv2Dictionary = $.csv.toObjects;

})( jQuery );
