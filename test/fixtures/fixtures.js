var fs = require('fs');

(function () {
  'use strict';

  function csvFixture (fixtureName) {
    return fs.readFileSync('./test/fixtures/' + fixtureName + '.csv', 'utf8');
  }

  function jsonFixture (fixtureName) {
    return JSON.parse(fs.readFileSync('./test/fixtures/' + fixtureName + '.json'));
  }

  var fixtures = {
    array_csv: csvFixture('array'),
    array_obj: jsonFixture('array'),
    arrays1_csv: csvFixture('arrays1'),
    arrays1_obj: jsonFixture('arrays1'),
    arrays2_csv: csvFixture('arrays2'),
    arrays2_obj: jsonFixture('arrays2'),
    rfc1_csv: csvFixture('rfc1'),
    rfc1_obj: jsonFixture('rfc1'),
    rfc2_csv: csvFixture('rfc2'),
    rfc2_obj: jsonFixture('rfc2'),
    rfc3_csv: csvFixture('rfc3'),
    rfc3_obj: jsonFixture('rfc3'),
    rfc4_csv: csvFixture('rfc4'),
    rfc4_obj: jsonFixture('rfc4'),
    rfc5_csv: csvFixture('rfc5'),
    rfc5_obj: jsonFixture('rfc5'),
    rfc6_csv: csvFixture('rfc6'),
    rfc6_obj: jsonFixture('rfc6'),
    rfc7_csv: csvFixture('rfc7'),
    rfc7_obj: jsonFixture('rfc7'),
    rfcA1_csv: csvFixture('rfcA1'),
    rfcA1_obj: jsonFixture('rfcA1'),
    rfcA2_csv: csvFixture('rfcA2'),
    rfcA2_obj: jsonFixture('rfcA2'),
    rfcA3_csv: csvFixture('rfcA3'),
    rfcA3_obj: jsonFixture('rfcA3'),
    newline_unix: csvFixture('newline_unix'),
    newline_dos: csvFixture('newline_dos'),
    newline_mac: csvFixture('newline_mac'),
    defaults_csv: csvFixture('defaults'),
    defaults_obj: jsonFixture('defaults'),
    defaults_fivelines_csv: csvFixture('defaults_fivelines'),
    delimiter_csv: csvFixture('delimiter'),
    delimiter_obj: jsonFixture('delimiter'),
    delimiter_fivelines_csv: csvFixture('delimiter_fivelines'),
    separator_csv: csvFixture('separator'),
    separator_obj: jsonFixture('separator'),
    separator_fivelines_csv: csvFixture('separator_fivelines'),
    regex_csv: csvFixture('regex'),
    regex_obj: jsonFixture('regex'),
    regex2_csv: csvFixture('regex2'),
    regex2_obj: jsonFixture('regex2'),
    regex3_csv: csvFixture('regex3'),
    regex3_obj: jsonFixture('regex3'),
    term_arrays_csv: csvFixture('term_arrays'),
    term_arrays_obj: jsonFixture('term_arrays'),
    term_objects_csv: csvFixture('term_objects'),
    term_objects_obj: jsonFixture('term_objects'),
    backslash_csv: csvFixture('backslash'),
    backslash_obj: jsonFixture('backslash'),
    objects_csv: csvFixture('objects'),
    objects_obj: jsonFixture('objects'),
    objects2_csv: csvFixture('objects2'),
    value_arrays_csv: csvFixture('value_arrays'),
    value_arrays_obj: jsonFixture('value_arrays'),
    value_objects_csv: csvFixture('value_objects'),
    value_objects_obj: jsonFixture('value_objects'),
    entry_arrays_csv: csvFixture('entry_arrays'),
    entry_arrays_obj: jsonFixture('entry_arrays'),
    entry_objects_csv: csvFixture('entry_objects'),
    entry_objects_obj: jsonFixture('entry_objects')
  };

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fixtures;
  }
}).call(this);
