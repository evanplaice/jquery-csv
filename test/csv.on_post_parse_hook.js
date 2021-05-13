const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toObjects onPostParse hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toObjects(fixtures.objects_csv, {
    onPostParse: (data, state) => {
      passedData = data
      passedState = state
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toArrays onPostParse hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toArrays(fixtures.arrays1_csv, {
    onPostParse: (data, state) => {
      passedData = data
      passedState = state
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toObjects onPostParse hook callback - should affect return value', (t) => {
  const returnEmptyArray = () => []
  const result = csv.toObjects(fixtures.objects_csv, { onPostParse: returnEmptyArray })
  t.deepEqual(result, [], 'return value should reflect what was returned from callback')
  t.end()
})

test('$.csv.toArrays onPostParse hook callback - should affect return value', (t) => {
  const returnEmptyArray = () => []
  const result = csv.toArrays(fixtures.arrays1_csv, { onPostParse: returnEmptyArray })
  t.deepEqual(result, [], 'return value should reflect what was returned from callback')
  t.end()
})
