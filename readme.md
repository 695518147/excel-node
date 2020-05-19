npm install node-xlsx --save

Examples
Parsing a xlsx from file/buffer, outputs an array of worksheets
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;
 
// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);
Building a xlsx
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;
 
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer
Custom column width
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;
 
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]
const options = {'!cols': [{ wch: 6 }, { wch: 7 }, { wch: 10 }, { wch: 20 } ]};
 
var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer
Spanning multiple rows A1:A4 in every sheets
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;
 
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
const range = {s: {c: 0, r:0 }, e: {c:0, r:3}}; // A1:A4
const options = {'!merges': [ range ]};
 
var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer
Spanning multiple rows A1:A4 in second sheet only
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;
 
const dataSheet1 = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
const dataSheet2 = [[4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14], ['baz', null, 'qux']];
const range = {s: {c: 0, r:0 }, e: {c:0, r:3}}; // A1:A4
const sheetOptions = {'!merges': [ range ]};
 
var buffer = xlsx.build([{name: "myFirstSheet", data: dataSheet1}, {name: "mySecondSheet", data: dataSheet2, options: sheetOptions}]); // Returns a buffer
Beware that if you try to merge several times the same cell, your xlsx file will be seen as corrupted.

Using Primitive Object Notation Data values can also be specified in a non-abstracted representation.
Examples:

const rowAverage = [[{t:'n', z:10, f:'=AVERAGE(2:2)'}], [1,2,3];
var buffer = xlsx.build([{name: "Average Formula", data: rowAverage}]);
Refer to xlsx documentation for valid structure and values:

Cell Object: https://sheetjs.gitbooks.io/docs/#cell-object
Data Types: https://sheetjs.gitbooks.io/docs/#data-types
Format: https://sheetjs.gitbooks.io/docs/#number-formats
Troubleshooting
This library requires at lease nodeJS v4. For legacy versions, you can use this workaround before using the lib.

npm i --save object-assign
Object.prototype.assign = require('object-assign');
Contributing
Please submit all pull requests the against master branch. If your unit test contains javascript patches or features, you should include relevant unit tests. Thanks!

Available scripts
Script	Description
start	Alias of test:watch
test	Run mocha unit tests
test:watch	Run and watch mocha unit tests
lint	Run eslint static tests
compile	Compile the library
compile:watch	Compile and watch the library
Authors
Olivier Louvignes

http://olouv.com
http://github.com/mgcrea
Copyright and license
Apache License 2.0

Copyright (C) 2012-2014  Olivier Louvignes

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

Except where noted, this license applies to any and all software programs and associated documentation files created by the Original Author and distributed with the Software:

Inspired by SheetJS gist examples, Copyright (c) SheetJS.
