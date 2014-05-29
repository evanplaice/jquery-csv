var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var csv      = require('../src/jquery.csv.js');
var fixtures = require('./fixtures.js');

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

  describe('fromArrays', function() {
    it ('should be able to format multi-entry/multi-cell data set', function() {
      var out = csv.fromArrays(fixtures.arrays_obj);
      console.dir(fixtures.arrays_csv);
      assert.deepEqual(out, fixtures.arrays_csv);
    });
  });


});

describe('line endings:', function () {

  describe('toArrays', function () {
    it ('should support \\n (unix) line endings', function () {
      var out = csv.toArrays(fixtures.basic_unix);
      out.should.have.length(2);
    });

    it ('should support \\r (mac) line endings', function () {
      var out = csv.toArrays(fixtures.basic_mac);
      out.should.have.length(2);
    });

    it ('should support \\r\\n (dos) line endings', function () {
      var out = csv.toArrays(fixtures.basic_dos);
      out.should.have.length(2);
    });

  });
});
