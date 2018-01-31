const test = require('tape');
const csv = require('../src/jquery.csv.js');
const fixtures = require('./fixtures/fixtures.js');

const setup = () => {
  const fixtures = require('./fixtures/fixtures.js');
  return fixtures;
};

const teardown = (fixtures) => {
  fixtures = {};
};

test('$.csv.parsers.splitLines() - should correctly split lines with default options', (t) => {
  let result = csv.parsers.splitLines(fixtures.defaults_fivelines_csv);
  t.equal(typeof (result), 'object', 'the returned object should be an array');
  t.true(Array.isArray(result), 'the returned object should be an array');
  t.equal(result.length, 5, 'the returned array should contain 5 lines');
  t.end();
});

test('$.csv.parsers.splitLines() - should correctly split lines with custom separator', (t) => {
  let options = {
    separator: ';'
  };

  let result = csv.parsers.splitLines(fixtures.separator_fivelines_csv, options);
  t.equal(typeof (result), 'object', 'the returned object should be an array');
  t.true(Array.isArray(result), 'the returned object should be an array');
  t.equal(result.length, 5, 'the returned array should contain 5 lines');
  t.end();
});

test('$.csv.parsers.splitLines() - should throw an error for using the wrong separator', (t) => {
  let options = {
    separator: ';'
  };

  function splitLines () {
    csv.parsers.splitLines(fixtures.defaults_fivelines_csv, options);
  }

  t.throws(splitLines);
  t.end();
});

test('$.csv.parsers.splitLines() - should correctly split lines with custom delimiter', (t) => {
  let options = {
    delimiter: "'"
  };

  let result = csv.parsers.splitLines(fixtures.delimiter_fivelines_csv, options);
  t.equal(typeof (result), 'object', 'the returned object should be an array');
  t.true(Array.isArray(result), 'the returned object should be an array');
  t.equal(result.length, 5, 'the returned array should contain 5 lines');
  t.end();
});

test('$.csv.parsers.splitLines() - should return undefined when csv is undefined', (t) => {
  let result = csv.parsers.splitLines();
  t.equal(typeof (result), 'undefined');
  t.end();
});
