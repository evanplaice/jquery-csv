const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toArray() - should be able to parse an entry containing multiple cells', (t) => {
  const result = csv.toArray(fixtures.array_csv)
  const expect = fixtures.array_obj
  t.deepEqual(result, expect)
  t.end()
})

test('$.csv.toArray() - should return [""] when input is empty', (t) => {
  const result = csv.toArray('')
  t.equal(result.length, 1)
  t.end()
})

test('$.csv.toArray() - should return ["a1"] when input is "a1"', (t) => {
  const result = csv.toArray('a1')
  t.equal(result.length, 1)
  t.equal(result[0], 'a1')
  t.end()
})
