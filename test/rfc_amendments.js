const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('RFC Amendment #1 - An unquoted field may contain a null (ie empty) value', (t) => {
  const result = csv.toArray(fixtures.rfcA1_csv)
  const expect = fixtures.rfcA1_obj
  t.deepEqual(result, expect)
  t.end()
})

test('RFC Amendment #2 - A quoted field may contain a null (ie empty) value', (t) => {
  const result = csv.toArray(fixtures.rfcA2_csv)
  const expect = fixtures.rfcA2_obj
  t.deepEqual(result, expect)
  t.end()
})

test('RFC Amendment #3 - The last field in an entry may contain a null (ie empty) value', (t) => {
  const result = csv.toArray(fixtures.rfcA3_csv)
  const expect = fixtures.rfcA3_obj
  t.deepEqual(result, expect)
  t.end()
})
