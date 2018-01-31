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

test('$.csv.fromArray()', (t) => { t.end(); });

// test('should be able to format a multi-cell entry', (t) => {
//   let result = csv.fromArray(fixtures.array_obj);
//   let expect = fixtures.array_csv;
//   t.deepEqual(result, expect);
//   t.end();
// });
