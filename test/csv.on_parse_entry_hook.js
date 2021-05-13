const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toObjects onParseEntry hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toObjects(fixtures.objects_csv, {
    onParseEntry: (data, state) => {
      passedData = data
      passedState = state
      return data
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toArrays onParseEntry hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toArrays(fixtures.arrays1_csv, {
    onParseEntry: (data, state) => {
      passedData = data
      passedState = state
      return data
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toObjects onParseEntry hook callback - should affect return value', (t) => {
  const returnMutatedEntry = (entry, state) => (state.rowNum === 2) ? false : entry
  const result = csv.toObjects(fixtures.entry_objects_csv, { onParseEntry: returnMutatedEntry })
  t.deepEqual(result, fixtures.entry_objects_obj, 'return value should reflect what was returned from callback')
  t.end()
})

test('$.csv.toArrays onParseEntry hook callback - should affect return value', (t) => {
  const returnMutatedEntry = (entry, state) => (state.rowNum === 2) ? false : entry
  const result = csv.toArrays(fixtures.entry_arrays_csv, { onParseEntry: returnMutatedEntry })
  t.deepEqual(result, fixtures.entry_arrays_obj, 'return value should reflect what was returned from callback')
  t.end()
})

test('$.csv.toObjects onParseEntry hook callback - should have correct state', (t) => {
  const checkEntryState = (entry, state) => {
    if (state.rowNum === 3) {
      t.equal(entry, 'keep3')
    }
    return entry
  }
  csv.toObjects(fixtures.entry_objects_csv, { onParseEntry: checkEntryState })
  t.end()
})

test('$.csv.toArrays onParseEntry hook callback - should have correct state', (t) => {
  const checkEntryState = (entry, state) => {
    if (state.rowNum === 3) {
      t.deepEqual(entry, ['keep3'])
    }
    return entry
  }
  csv.toArrays(fixtures.entry_arrays_csv, { onParseEntry: checkEntryState })
  t.end()
})
