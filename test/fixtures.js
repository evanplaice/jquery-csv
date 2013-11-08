var fs     = require('fs');

(function (undefined) {
  'use strict';

  function fixture(fixtureName) {
    return fs.readFileSync('./test/fixtures/' + fixtureName + '.csv', {
      encoding: 'UTF-8'
    });
  }

  var fixtures = {
    basic_unix: fixture('basic_unix'),
    basic_dos: fixture('basic_dos'),
    basic_mac: fixture('basic_mac')
  };

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fixtures;
  }

}).call( this );
