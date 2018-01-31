/* no-unused-vars: 2 */

var assert = require('chai').assert;

var csv = require('../src/jquery.csv.js');
var fixtures = require('./fixtures/fixtures.js');

describe('splitLines', function () {
  it('should correctly split lines with default options', function () {
    var out = csv.parsers.splitLines(fixtures.defaults_fivelines_csv);
    assert(typeof out === 'object' && Array.isArray(out), 'the returned object should be an array');
    assert.strictEqual(out.length, 5, 'the returned array should contain 5 lines');
  });

  it('should correctly split lines with custom separator', function () {
    var options = {
      separator: ';',
    };

    var out = csv.parsers.splitLines(fixtures.separator_fivelines_csv, options);
    assert(typeof out === 'object' && Array.isArray(out), 'the returned object should be an array');
    assert.strictEqual(out.length, 5, 'the returned array should contain 5 lines');
  });

  it('should throw an error for using the wrong separator', function () {
    var options = {
      separator: ';'
    };
    function splitLines() {
      csv.parsers.splitLines(fixtures.defaults_fivelines_csv, options);
    }

    assert.throws(splitLines, Error);
  });

  it('should correctly split lines with custom delimiter', function () {
    var options = {
      delimiter: "'",
    };

    var out = csv.parsers.splitLines(fixtures.delimiter_fivelines_csv, options);
    assert(typeof out === 'object' && Array.isArray(out), 'the returned object should be an array');
    assert.strictEqual(out.length, 5, 'the returned array should contain 5 lines');
  });

  it('should return undefined when csv is undefined', function () {
    var out = csv.parsers.splitLines();
    assert.notExists(out);
  });
});
