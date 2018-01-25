/* global $:true jQuery:true */

var fs = require('fs');
var $ = jQuery = require('jQuery');
require('../src/jquery.csv.js');

var sample = './data/sample.csv';
fs.readFile(sample, 'UTF-8', function (err, csv) {
  if (err) { console.log(err); }
  $.csv.toArrays(csv, {}, function (err, data) {
    if (err) { console.log(err); }
    for (var i = 0, len = data.length; i < len; i++) {
      console.log(data[i]);
    }
  });
});
