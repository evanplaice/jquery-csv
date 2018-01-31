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

test('$.csv.toArray() - should be able to parse an entry containing multiple cells', (t) => {
  let result = csv.toArray(fixtures.array_csv);
  let expect = fixtures.array_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('$.csv.toArray() - should return [""] when input is empty', (t) => {
  let result = csv.toArray('');
  t.equal(result.length, 1);
  t.end();
});

test('$.csv.toArray() - should return ["a1"] when input is "a1"', (t) => {
  let result = csv.toArray('a1');
  t.equal(result.length, 1);
  t.equal(result[0], 'a1');
  t.end();
});
