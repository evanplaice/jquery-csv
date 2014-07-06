var fs     = require('fs');

(function (undefined) {
  'use strict';

  function CSVfixture(fixtureName) {
    return fs.readFileSync('./test/fixtures/' + fixtureName + '.csv', 'utf8');
  }

  function JSONfixture(fixtureName) {
    return JSON.parse(fs.readFileSync('./test/fixtures/' + fixtureName + '.json'));
  }

  var fixtures = {
    array_csv:        CSVfixture('array'),
    array_obj:        JSONfixture('array'),
    arrays_csv:       CSVfixture('arrays'),
    arrays_obj:       JSONfixture('arrays'),
    rfc1_csv:         CSVfixture('rfc1'),
    rfc1_obj:         JSONfixture('rfc1'),
    rfc2_csv:         CSVfixture('rfc2'),
    rfc2_obj:         JSONfixture('rfc2'),
    rfc3_csv:         CSVfixture('rfc3'),
    rfc3_obj:         JSONfixture('rfc3'),
    rfc4_csv:         CSVfixture('rfc4'),
    rfc4_obj:         JSONfixture('rfc4'),
    rfc5_csv:         CSVfixture('rfc5'),
    rfc5_obj:         JSONfixture('rfc5'),
    rfc6_csv:         CSVfixture('rfc6'),
    rfc6_obj:         JSONfixture('rfc6'),
    rfc7_csv:         CSVfixture('rfc7'),
    rfc7_obj:         JSONfixture('rfc7'),
    rfcA1_csv:        CSVfixture('rfcA1'),
    rfcA1_obj:        JSONfixture('rfcA1'),
    rfcA2_csv:        CSVfixture('rfcA2'),
    rfcA2_obj:        JSONfixture('rfcA2'),
    rfcA3_csv:        CSVfixture('rfcA3'),
    rfcA3_obj:        JSONfixture('rfcA3'),
    newline_unix:     CSVfixture('newline_unix'),
    newline_dos:      CSVfixture('newline_dos'),
    newline_mac:      CSVfixture('newline_mac'),
    defaults_csv:     CSVfixture('defaults'),
    defaults_obj:     JSONfixture('defaults'),
    delimiter_csv:    CSVfixture('delimiter'),
    delimiter_obj:    JSONfixture('delimiter'),
    separator_csv:    CSVfixture('separator'),
    separator_obj:    JSONfixture('separator'),
    regex_csv:        CSVfixture('regex'),
    regex_obj:        JSONfixture('regex'),
    term_arrays_csv:  CSVfixture('term_arrays'),
    term_arrays_obj:  JSONfixture('term_arrays'),
    term_objects_csv: CSVfixture('term_objects'),
    term_objects_obj: JSONfixture('term_objects'),
  };

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fixtures;
  }

}).call( this );
