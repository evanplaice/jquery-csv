var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var csv      = require('../src/jquery.csv.js');
var fixtures = require('./fixtures/fixtures.js');

describe('core:', function () {

  describe('toArray', function () {
    it ('should be able to parse an entry containing multiple cells', function () {
      var out = csv.toArray(fixtures.array_csv);
      assert.deepEqual(out, fixtures.array_obj);
    });

    it ('should return [""] when input is empty', function () {
      var out = csv.toArray('');
      out.should.have.length(1);
    });

    it ('should return ["a1"] when input is "a1"', function () {
      var out = csv.toArray('a1');
      out.should.have.length(1);
      out[0].should.equal('a1');
    });
  });

//describe('fromArray', function () {
//  it ('should be able to format a multi-cell entry', function () {
//    var out = csv.fromArray(fixtures.array_obj);
//    assert.deepEqual(out, fixtures.array_csv);
//  });
//});

  describe('toArrays', function () {
    it ('should be able to parse multi-entry/multi-cell input', function () {
      var out = csv.toArrays(fixtures.arrays_csv);
      assert.deepEqual(out, fixtures.arrays_obj);
    });
  });

//  describe('fromArrays', function() {
//    it ('should be able to format multi-entry/multi-cell data set', function() {
//      var out = csv.fromArrays(fixtures.arrays_obj);
//      assert.deepEqual(out, fixtures.arrays_csv);
//    });
//  });
});

describe('RFC 4180 Compliance', function () {
  it ('should follow Rule #1 - One entry per line, each line ends with a newline', function () {
    var out = csv.toArrays(fixtures.rfc1_csv);
    assert.deepEqual(out, fixtures.rfc1_obj);
  });

  it ('should follow Rule #2 - Trailing newline at the end of the file ommitted', function () {
    var out = csv.toArrays(fixtures.rfc2_csv);
    assert.deepEqual(out, fixtures.rfc2_obj);
  });

  it ('should follow Rule #3 - First row contains header data', function () {
    var out = csv.toObjects(fixtures.rfc3_csv);
    assert.deepEqual(out, fixtures.rfc3_obj);
  });

  it ('should follow Rule #4 - Spaces are considered data and entries should not contain a trailing comma', function () {
    var out = csv.toArray(fixtures.rfc4_csv);
    assert.deepEqual(out, fixtures.rfc4_obj);
  });

  it ('should follow Rule #5 - Lines may or may not be delimited by double-quotes', function () {
    var out = csv.toArrays(fixtures.rfc5_csv);
    assert.deepEqual(out, fixtures.rfc5_obj);
  });

  it ('should follow Rule #6 - Fields containing line breaks, double-quotes, and commas should be enclosed in double-quotes', function () {
    var out = csv.toArrays(fixtures.rfc6_csv);
    assert.deepEqual(out, fixtures.rfc6_obj);
  });

  it ('should follow Rule #7 - If double-quotes are used to enclose fields, then a double-quote appering inside a field must be escaped by a preceding it with another double-quote', function () {
    var out = csv.toArray(fixtures.rfc7_csv);
    assert.deepEqual(out, fixtures.rfc7_obj);
  });

  it ('should follow Amendment #1 - An unquoted field may contain a null (ie empty) value', function () {
    var out = csv.toArray(fixtures.rfcA1_csv);
    assert.deepEqual(out, fixtures.rfcA1_obj);
  });

  it ('should follow Amendment #2 - A quoted field may contain a null (ie empty) value', function() {
    var out = csv.toArray(fixtures.rfcA2_csv);
    assert.deepEqual(out, fixtures.rfcA2_obj);
  });

  it ('should follow Amendment #3 - The last field in an entry may contain a null (ie empty) value', function() {
    var out = csv.toArray(fixtures.rfcA3_csv);
    assert.deepEqual(out, fixtures.rfcA3_obj);
  });
});

describe('line endings:', function () {
  it ('should support \\n (unix) line endings', function () {
    var out = csv.toArrays(fixtures.newline_unix);
    out.should.have.length(2);
  });

  it ('should support \\r (mac) line endings', function () {
    var out = csv.toArrays(fixtures.newline_mac);
    out.should.have.length(2);
  });

  it ('should support \\r\\n (dos) line endings', function () {
    var out = csv.toArrays(fixtures.newline_dos);
    out.should.have.length(2);
  });
});

describe('custom terminals (ie delimiter, separator', function() {
  it ('should parse using the default terminals', function() {
    var out = csv.toArray(fixtures.defaults_csv);
    assert.deepEqual(out, fixtures.defaults_obj);
  });

  it ('should parse using a custom delimiter', function() {
    var out = csv.toArray(fixtures.delimiter_csv, { delimiter:"'" });
    assert.deepEqual(out, fixtures.delimiter_obj); 
  });

  it ('should parse using a custom separator', function() {
    var out = csv.toArray(fixtures.separator_csv, { separator:";"});
    assert.deepEqual(out, fixtures.separator_obj);
  });

  it ('should properly escape regex special chars', function() {
    var out = csv.toArray(fixtures.regex_csv, { separator:'|'});
    assert.deepEqual(out, fixtures.regex_obj);
  });

  it ('should support custom terminals via toArrays()', function() {
    var out = csv.toArrays(fixtures.term_arrays_csv, { delimiter: '*', separator:':' });
    assert.deepEqual(out, fixtures.term_arrays_obj);
  });
  
  it ('should support custom terminals via toObjects()', function() {
    var out = csv.toObjects(fixtures.term_objects_csv, { delimiter: '^', separator: '&'} );
    assert.deepEqual(out, fixtures.term_objects_obj);
  });
});


//describe('custom start/end points', function() {
//  it('should start at a certain point when used on toArrays()', function() {
//  });
//});