/* no-unused-vars: 2 */

var assert = require('chai').assert;

var csv = require('../src/jquery.csv.js');
var fixtures = require('./fixtures/fixtures.js');

describe('edge cases', function () {
  it('should properly escape backslashes', function () {
    var out = csv.toObjects(fixtures.edge1_csv);
    assert.deepEqual(out, fixtures.edge1_obj);
  });
});
