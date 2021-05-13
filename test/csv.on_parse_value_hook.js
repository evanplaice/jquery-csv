const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toObjects onParseValue hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toObjects(fixtures.objects_csv, {
    onParseValue: (data, state) => {
      passedData = data
      passedState = state
      return data
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toArrays onParseValue hook callback - should be passed the data and state', (t) => {
  let passedData, passedState

  csv.toArrays(fixtures.arrays1_csv, {
    onParseValue: (data, state) => {
      passedData = data
      passedState = state
      return data
    }
  })

  t.isNot(passedData, null, 'data argument should not be null')
  t.isNot(passedState, null, 'state argument should not be null')
  t.end()
})

test('$.csv.toObjects onParseValue hook callback - should affect return value', (t) => {
  const returnMutatedValues = (value) => value + 'a'
  const result = csv.toObjects(fixtures.value_objects_csv, { onParseValue: returnMutatedValues })
  t.deepEqual(result, fixtures.value_objects_obj, 'return value should reflect what was returned from callback')
  t.end()
})

test('$.csv.toObjects onParseValue hook callback - should have correct state', (t) => {
  const checkValueState = (value, state) => {
    if (state.rowNum === 2 && state.colNum === 3) {
      t.equal(value, 'some')
    }
    return value
  }
  csv.toObjects(fixtures.value_objects_csv, { onParseValue: checkValueState })
  t.end()
})

test('$.csv.toArrays onParseValue hook callback - should have correct state', (t) => {
  const checkValueState = (value, state) => {
    if (state.rowNum === 1 && state.colNum === 3) {
      t.equal(value, 'some')
    }
    return value
  }
  csv.toArrays(fixtures.value_arrays_csv, { onParseValue: checkValueState })
  t.end()
})
