const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.toObjects() - should parse csv to a javascript object', (t) => {
  const result = csv.toObjects(fixtures.objects_csv)
  t.deepEquals(result, fixtures.objects_obj)
  t.end()
})
