const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.fromArrays() - should be able to format multi-entry/multi-cell data set', (t) => {
  const result = csv.fromArrays(fixtures.arrays1_obj)
  const expect = fixtures.arrays1_csv
  t.deepEqual(result, expect)
  t.end()
})

test('$.csv.fromArrays() - should be able to format multi-entry/multi-cell data set with escaped delimiters', (t) => {
  const result = csv.fromArrays(fixtures.arrays2_obj)
  console.dir(result)
  const expect = fixtures.arrays2_csv
  t.deepEqual(result, expect)
  t.end()
})
