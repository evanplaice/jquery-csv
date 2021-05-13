/* eslint-disable no-unused-vars */
const fs = require('fs')
const csv = require('jquery-csv')
const sample = './data/sample.csv'

fs.readFile(sample, 'UTF-8', function (err, csv) {
  if (err) { console.log(err) }
  csv.toArrays(csv, {}, function (err, data) {
    if (err) { console.log(err) }
    for (let i = 0, len = data.length; i < len; i++) {
      console.log(data[i])
    }
  })
})
