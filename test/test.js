var assert = require('assert');
var should = require('should');

var csv      = require('../src/jquery.csv.js');
var fixtures = require('./fixtures.js');

describe('csv2js:', function () {

  describe('toArray', function () {
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
});
