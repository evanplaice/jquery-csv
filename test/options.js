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

test('Options - should parse using the default terminals', (t) => {
  let result = csv.toArray(fixtures.defaults_csv);
  let expect = fixtures.defaults_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Options - should parse using a custom delimiter', (t) => {
  let options = {
    delimiter: '\''
  };

  let result = csv.toArray(fixtures.delimiter_csv, options);
  let expect = fixtures.delimiter_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Options - should parse using a custom separator', (t) => {
  let options = {
    separator: ';'
  };

  let result = csv.toArray(fixtures.separator_csv, options);
  let expect = fixtures.separator_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Options - should properly escape regex special chars', (t) => {
  let options = {
    separator: '|'
  };

  let result = csv.toArray(fixtures.regex_csv, options);
  let expect = fixtures.regex_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Options - should support custom terminals via toArrays()', (t) => {
  let options = {
    delimiter: '*',
    separator: ':'
  };

  let result = csv.toArrays(fixtures.term_arrays_csv, options);
  let expect = fixtures.term_arrays_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Options - should support custom terminals via toObjects()', (t) => {
  let options = {
    delimiter: '^',
    separator: '&'
  };

  let result = csv.toObjects(fixtures.term_objects_csv, options);
  let expect = fixtures.term_objects_obj;
  t.deepEqual(result, expect);
  t.end();
});
