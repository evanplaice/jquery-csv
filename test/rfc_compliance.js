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

test('RFC Rule #1 - One entry per line, each line ends with a newline', (t) => {
  let result = csv.toArrays(fixtures.rfc1_csv);
  let expect = fixtures.rfc1_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #2 - Trailing newline at the end of the file ommitted', (t) => {
  let result = csv.toArrays(fixtures.rfc2_csv);
  let expect = fixtures.rfc2_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #3 - First row contains header data', (t) => {
  let result = csv.toObjects(fixtures.rfc3_csv);
  let expect = fixtures.rfc3_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #4 - Spaces are considered data and entries should not contain a trailing comma', (t) => {
  let result = csv.toArray(fixtures.rfc4_csv);
  let expect = fixtures.rfc4_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #5 - Lines may or may not be delimited by double-quotes', (t) => {
  let result = csv.toArrays(fixtures.rfc5_csv);
  let expect = fixtures.rfc5_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #6 - Fields containing line breaks, double-quotes, and commas should be enclosed in double-quotes', (t) => {
  let result = csv.toArrays(fixtures.rfc6_csv);
  let expect = fixtures.rfc6_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('RFC Rule #7 - If double-quotes are used to enclose fields, then a double-quote appering inside a field must be escaped by a preceding it with another double-quote', (t) => {
  let result = csv.toArray(fixtures.rfc7_csv);
  let expect = fixtures.rfc7_obj;
  t.deepEqual(result, expect);
  t.end();
});
