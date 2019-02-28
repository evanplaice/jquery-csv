const test = require('tape');
const csv = require('../src/jquery.csv.js');
const fixtures = require('./fixtures/fixtures.js');

test('Edge Case - should properly escape backslashes', (t) => {
  let result = csv.toObjects(fixtures.backslash_csv);
  let expect = fixtures.backslash_obj;
  t.deepEqual(result, expect);
  t.end();
});

test('Edge Case - should support \\n (unix) line endings', (t) => {
  let result = csv.toArrays(fixtures.newline_unix);
  t.equal(result.length, 2);
  t.end();
});

test('Edge Case - should support \\r (mac) line endings', (t) => {
  let result = csv.toArrays(fixtures.newline_mac);
  t.equal(result.length, 2);
  t.end();
});

test('Edge Case - should support \\r\\n (dos) line endings', (t) => {
  let result = csv.toArrays(fixtures.newline_dos);
  t.equal(result.length, 2);
  t.end();
});
