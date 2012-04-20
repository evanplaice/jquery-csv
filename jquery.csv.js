/**
 * jQuery CSV Plugin
 * version: 0.1 (2012-04-20)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * This plugin was originally designed to assist in parsing CSV files loaded
 * from client-side javascript. It's influenced by jQuery.json and the original
 * core RegEx comes directly from the following answer posted by a 
 * StackOverflow.com user named Ridgerunner.
 * Source:
 * - http://stackoverflow.com/q/8493195/290340 
 *
 * For legal purposes I'll include the "NO WARRANTY EXPRESSED OR IMPLIED. 
 * USE AT YOUR OWN RISK.". Which, in 'layman's terms' means, by using this
 * library you are accepting responsability if it breaks your code. 
 *
 * Legal jargon aside, I will do my best to provide a useful and stable core
 * that can effectively be built on.
 * 
 * Copyrighted 2012 by Evan Plaice.
 */


(function( $ ) {
	/**
	 * jQuery.CSV2Array(csvString)
	 * Converts a CSV string to a javascript array.
	 * 
	 * @param {String} csv The string containing the raw CSV data.
   * @param {Character} [separator] An override for the separator character. Defaults to a comma(,).
   * @param {Character} [delimiter] An override for the delimiter character. Defaults to a quote(').
   * @param {String} [line-break] An override for the line-break style. Defaults to CRLF('\r\n')
   * @param {Boolean} [headers] Indicates whether the CSV file contains headers. If true the first line is parsed separately.
   *
   * This method deals with multi-line CSV. The breakdown is simple. The first
   * dimension of the array represents the line (or entry/row) while the second
   * dimension contains the values (or values/columns).
   * 
   * Example - Print the 4th value in the 10th row:
   *   data = $.CSV2Array(csv); // cache the output to avoid unnecessary processing
   *   console.log(data[9][3]);  
	 */
  $.CSV2Array = function(csv) {
    //var separator = ','; // not used yet
    //var delimiter = '\''; // not used yet
    var line-break = '\r\n'; // not used yet
    var headers = false; // not used yet
    
    // check for line breaks
    lines = csv.split('\n');
    output = []
    for(var i in lines) {
      line = $.CSVEntry2Array(lines[i]);
      output.push(line);
    }
    return output;
  };
  
  // TODO: Document this method.
  $.CSVEntry2Array = function(csv) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(csv)) return null;
    var a = [];                     // Initialize array to receive values.
    csv.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(csv)) a.push('');
    return a;
};

})( jQuery );