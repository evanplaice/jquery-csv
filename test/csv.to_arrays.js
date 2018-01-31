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

test('$.csv.toArrays() - should be able to parse multi-entry/multi-cell input', (t) => {
  let result = csv.toArrays(fixtures.arrays_csv);
  let expect = fixtures.arrays_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('$.csv.toArrays() - should be able to parse multi-entry/multi-cell input', (t) => {
  let result = csv.toArrays(fixtures.arrays_csv);
  let expect = fixtures.arrays_obj;
  t.deepEqual(result, expect);
  t.end();
});
