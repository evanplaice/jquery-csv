const test = require('tape')
const csv = require('../src/jquery.csv.js')
const fixtures = require('./fixtures/fixtures.js')

test('$.csv.fromObjects() - should parse javascript object to a csv', (t) => {
  const result = csv.fromObjects(fixtures.objects_obj)
  t.deepEquals(result, fixtures.objects2_csv)
  t.end()
})
