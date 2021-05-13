const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toObjects onPreParse hook callback - should be passed the raw csv and state', (t) => {
  let passedCSV, passedState

  csv.toObjects(fixtures.objects_csv, {
    onPreParse: (csv, state) => {
      passedCSV = csv
      passedState = state
      return csv
    }
  })

  t.isNot(passedCSV, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toArrays onPreParse hook callback - should be passed the raw csv and state', (t) => {
  let passedCSV, passedState

  csv.toArrays(fixtures.arrays1_csv, {
    onPreParse: (csv, state) => {
      passedCSV = csv
      passedState = state
      return csv
    }
  })

  t.isNot(passedCSV, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toObjects onPreParse hook callback - should affect return value', (t) => {
  const returnEmptyCSV = () => 'header\n""'
  const result = csv.toObjects(fixtures.objects_csv, { onPreParse: returnEmptyCSV })
  t.deepEqual(result, [{ header: '' }], 'return value should reflect what was returned from callback')
  t.end()
})

test('$.csv.toArrays onPreParse hook callback - should affect return value', (t) => {
  const returnEmptyCSV = () => ''
  const result = csv.toArrays(fixtures.arrays1_csv, { onPreParse: returnEmptyCSV })
  t.deepEqual(result, [], 'return value should reflect what was returned from callback')
  t.end()
})
