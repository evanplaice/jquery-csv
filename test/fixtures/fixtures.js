var fs     = require('fs');

(function (undefined) {
  'use strict';

  function csvFixture(fixtureName) {
    return fs.readFileSync('./test/fixtures/' + fixtureName + '.csv', 'utf8');
  }

  function jsonFixture(fixtureName) {
    return JSON.parse(fs.readFileSync('./test/fixtures/' + fixtureName + '.json'));
  }

  var fixtures = {
    array_csv:        csvFixture('array'),
    array_obj:        jsonFixture('array'),
    arrays_csv:       csvFixture('arrays'),
    arrays_obj:       jsonFixture('arrays'),
    rfc1_csv:         csvFixture('rfc1'),
    rfc1_obj:         jsonFixture('rfc1'),
    rfc2_csv:         csvFixture('rfc2'),
    rfc2_obj:         jsonFixture('rfc2'),
    rfc3_csv:         csvFixture('rfc3'),
    rfc3_obj:         jsonFixture('rfc3'),
    rfc4_csv:         csvFixture('rfc4'),
    rfc4_obj:         jsonFixture('rfc4'),
    rfc5_csv:         csvFixture('rfc5'),
    rfc5_obj:         jsonFixture('rfc5'),
    rfc6_csv:         csvFixture('rfc6'),
    rfc6_obj:         jsonFixture('rfc6'),
    rfc7_csv:         csvFixture('rfc7'),
    rfc7_obj:         jsonFixture('rfc7'),
    rfcA1_csv:        csvFixture('rfcA1'),
    rfcA1_obj:        jsonFixture('rfcA1'),
    rfcA2_csv:        csvFixture('rfcA2'),
    rfcA2_obj:        jsonFixture('rfcA2'),
    rfcA3_csv:        csvFixture('rfcA3'),
    rfcA3_obj:        jsonFixture('rfcA3'),
    newline_unix:     csvFixture('newline_unix'),
    newline_dos:      csvFixture('newline_dos'),
    newline_mac:      csvFixture('newline_mac'),
    defaults_csv:     csvFixture('defaults'),
    defaults_obj:     jsonFixture('defaults'),
    delimiter_csv:    csvFixture('delimiter'),
    delimiter_obj:    jsonFixture('delimiter'),
    separator_csv:    csvFixture('separator'),
    separator_obj:    jsonFixture('separator'),
    regex_csv:        csvFixture('regex'),
    regex_obj:        jsonFixture('regex'),
    term_arrays_csv:  csvFixture('term_arrays'),
    term_arrays_obj:  jsonFixture('term_arrays'),
    term_objects_csv: csvFixture('term_objects'),
    term_objects_obj: jsonFixture('term_objects'),
  };

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fixtures;
  }

}).call( this );
