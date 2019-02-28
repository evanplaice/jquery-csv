const test = require('tape');
const csv = require('../src/jquery.csv.js');
const fixtures = require('./fixtures/fixtures.js');

test('$.csv.fromArrays() - should be able to format multi-entry/multi-cell data set', (t) => {
  let result = csv.fromArrays(fixtures.arrays1_obj);
  let expect = fixtures.arrays1_csv;
  t.deepEqual(result, expect);
  t.end();
});

test('$.csv.fromArrays() - should be able to format multi-entry/multi-cell data set with escaped delimiters', (t) => {
  let result = csv.fromArrays(fixtures.arrays2_obj);
  console.dir(result);
  let expect = fixtures.arrays2_csv;
  t.deepEqual(result, expect);
  t.end();
});
