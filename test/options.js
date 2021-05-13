const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('Options - should parse using the default terminals', (t) => {
  const result = csv.toArray(fixtures.defaults_csv)
  const expect = fixtures.defaults_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should parse using a custom delimiter', (t) => {
  const options = {
    delimiter: '\''
  }

  const result = csv.toArray(fixtures.delimiter_csv, options)
  const expect = fixtures.delimiter_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should parse using a custom separator', (t) => {
  const options = {
    separator: ';'
  }

  const result = csv.toArray(fixtures.separator_csv, options)
  const expect = fixtures.separator_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should properly escape regex special chars', (t) => {
  const options = {
    separator: '|'
  }

  const result = csv.toArray(fixtures.regex_csv, options)
  const expect = fixtures.regex_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should properly escape regex ( chars', (t) => {
  const options = {
    separator: '('
  }

  const result = csv.toArray(fixtures.regex2_csv, options)
  const expect = fixtures.regex2_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should properly escape regex * chars', (t) => {
  const options = {
    delimiter: '*'
  }

  const result = csv.toArray(fixtures.regex3_csv, options)
  const expect = fixtures.regex3_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should support custom terminals via toArrays()', (t) => {
  const options = {
    delimiter: '*',
    separator: ':'
  }

  const result = csv.toArrays(fixtures.term_arrays_csv, options)
  const expect = fixtures.term_arrays_obj
  t.deepEqual(result, expect)
  t.end()
})

test('Options - should support custom terminals via toObjects()', (t) => {
  const options = {
    delimiter: '^',
    separator: '&'
  }

  const result = csv.toObjects(fixtures.term_objects_csv, options)
  const expect = fixtures.term_objects_obj
  t.deepEqual(result, expect)
  t.end()
})
