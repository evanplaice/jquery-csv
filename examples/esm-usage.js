import * as csv from 'jquery-csv';
import * as  fs from 'fs';


let sample = './data/sample.csv';
fs.readFile(sample, 'UTF-8', (err, fileContent) => {
  if (err) { console.log(err); }
  csv.toArrays(fileContent, {}, (err, data) => {
    if (err) { console.log(err); }
    for (let i = 0, len = data.length; i < len; i++) {
      console.log(data[i]);
    }
  });
});
