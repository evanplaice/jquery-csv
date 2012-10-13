var fs = require('fs');
var $ = jQuery = require('jQuery');
require('../src/jquery.csv.js');

var sample = './data/sample.csv';
fs.readFile(sample, 'UTF-8', function(err, csv) {
  $.csv.toArrays(csv, {}, function(err, data) {
    for(var i=0, len=data.length; i<len; i++) {
      console.log(data[i]);
    }
  });
});