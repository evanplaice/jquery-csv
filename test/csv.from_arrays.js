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

test('$.csv.fromArrays() - should be able to format multi-entry/multi-cell data set', (t) => {
  let result = csv.fromArrays(fixtures.arrays_obj);
  let expect = fixtures.arrays_csv;
  t.deepEqual(result, expect);
  t.end();
});
