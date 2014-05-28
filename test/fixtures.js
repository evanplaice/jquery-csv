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
    array_csv:    CSVfixture('array'),
    array_obj:    JSONfixture('array'),
    arrays_csv:   CSVfixture('arrays'),
    arrays_obj:   JSONfixture('arrays'),
    basic_unix:   CSVfixture('basic_unix'),
    basic_dos:    CSVfixture('basic_dos'),
    basic_mac:    CSVfixture('basic_mac')
  };

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fixtures;
  }

}).call( this );
