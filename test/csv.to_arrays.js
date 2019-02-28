const test = require('tape');
const csv = require('../src/jquery.csv.js');
const fixtures = require('./fixtures/fixtures.js');

test('$.csv.toArrays() - should be able to parse multi-entry/multi-cell input', (t) => {
  let result = csv.toArrays(fixtures.arrays1_csv);
  let expect = fixtures.arrays1_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('$.csv.toArrays() - should be able to parse multi-entry/multi-cell input with escaped delimiters', (t) => {
  let result = csv.toArrays(fixtures.arrays2_csv);
  let expect = fixtures.arrays2_obj;
  t.deepEqual(result, expect);
  t.end();
});
