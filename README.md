<div style="font-weight:bold; text-align:center;">NOTICE: For a more modern take on CSV parsing, check out the <a href="https://github.com/vanillaes/csv-es">CSV-ES</a> project</div>

[![GitHub Releases](https://img.shields.io/github/release/typeiii/jquery-csv.svg)](https://github.com/typeiii/jquery-csv/releases)
[![NPM Release](https://img.shields.io/npm/v/jquery-csv.svg)](https://www.npmjs.com/package/jquery-csv)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/typeiii/jquery-csv/master/LICENSE)
[![Latest Status](https://github.com/typeiii/jquery-csv/workflows/Latest/badge.svg)](https://github.com/typeiii/jquery-csv/actions)
[![Release Status](https://github.com/typeiii/jquery-csv/workflows/Release/badge.svg)](https://github.com/typeiii/jquery-csv/actions)

# Introduction

jQuery-csv is an artifact of a simpler time (ie 2012) when the JS library ecosystem was still very underdeveloped. This was the first and still is one of the fastest spec compliant CSV parsers available. 

This is a complete, customizable, battle tested, performance optimized CSV parser that follows the traditional jQuery-style of syntax. Featuring a slim Chomsky - Type III parser implementation. Full (that means 100%) [IETF RFC 4180](http://tools.ietf.org/html/rfc4180) compliance. Including coverage for a few edge cases that even the spec fails to cover.

Enough with the wind-up...


# Features

* Convert a CSV String to an array
* Convert a multi-line CSV string to a 2D array
* Convert a multi-line CSV string to an array of objects (ie header:value pairs)
* Convert an array of values to CSV (under development)
* Convert an array of objects to CSV (under development)
* Hooks/Callbacks to extend the default parsing process
* Customizable delimiter (default: ") and separator (default: ,) characters
* Node.js support (ie CommonJS importing and async callback support)

# Syntax

## Importing

**Client-Side** (ie browser) - import via the script element.
```javascript
<script src="jquery-csv.js"></script>
```

**Server-Side** (ie Node.js) - Import via the standard CommonJS approach.

Install the package via NPM

```bash
npm i jquery-csv
```
Then import it as a CommonJS module.

```javascript
var csv = require('./jquery.csv.js');
```

## Usage

Each one of the methods can be called with the following form:
```javascript
$.csv.function(csv, {options}, callback);
```

| Name		  |           | Description |
|-----------|-----------|:------------|
| csv		    | required	| The csv data to be transformed. |
| options	  | optional	| An object containing user-defined overrides for the default options. |
| callback	| optional	| Used for Node.js-style async callbacks. Uses the form function(err, data). |

## Methods

**toArray**

Parse a single entry string to an array
```javascript
$.csv.toArray(csv);
```
*Documented under API#$.csv.toArray().*

**toArrays**

Parse a multi-line CSV string to a 2D array
```javascript
$.csv.toArrays(csv);
```
*Documented under API#$.csv.toArrays().*

**toObjects**

Parse a multi-line CSV string to an array of objects
```javascript
$.csv.toObjects(csv);
```
*Documented under API#$.csv.toObjects().*

**fromArrays**

Convert array data to a CSV string
```javascript
$.csv.fromArrays(arrays);
```

**fromObjects**

Convert an array of objects to a CSV string
```javascript
$.csv.fromObjects(objects);
```

# Documentation

- [API](./docs/api.md)
- [Hooks & Callbacks](./docs/hooks-callbacks.md)
- [Algorithm](./docs/algorithm.md)

# Use Cases

Instead of the typical useless contrived example code, I have provided a handful of simple yet powerful demos. Not only are they fun to play with but a quick peak at the source will show you how simple and easy they were to implement. Feel free to copy and reuse these in your own projects.

## Basic Usage

Want to play with the parser and maybe validate your CSV data without all the frills? No need to download the source first, there's a demo for that...

[jQuery-CSV - toArray()](http://typeiii.github.io/jquery-csv/examples/to-array.html)

[jQuery-CSV - toArrays()](http://typeiii.github.io/jquery-csv/examples/to-arrays.html)

[jQuery-CSV - fromArrays()](http://typeiii.github.io/jquery-csv/examples/from-arrays.html)

[jQuery-CSV - toObjects()](http://typeiii.github.io/jquery-csv/examples/to-objects.html)

[jQuery-CSV - fromObjects()](http://typeiii.github.io/jquery-csv/examples/from-objects.html)

## Node.js ESM (EcmaScript Module) Import

Here's how to import jQuery-CSV as am ECMAScript module Node.js:

[jQuery-CSV - ESM Import Demonstration](http://typeiii.github.io/jquery-csv/examples/snippets/esm-usage.js)

## Node.js CJS (CommonJS Module) Import

Here's how to import jQuery-CSV as CommonJS module Node.js:

[jQuery-CSV - CJS Import Demonstration](http://typeiii.github.io/jquery-csv/examples/snippets/node-usage.js)

## Client-Side File Handling

Yes, you read that right. It's now possible to open local files in the browser without firing a single request to the server.

The functionality is still pretty new so not all browsers support it (I'm looking @ you IE). If that's not an issue I highly suggest you try it. It's much easier than the traditional client/server approach.

[jQuery-CSV - File Handling Demonstration](http://typeiii.github.io/jquery-csv/examples/file-handling.html)

## jQuery-CSV + Flot

Hands down, the most exciting addition to the demo collection so far...

You can input the data set using either the text area provided or via uploading CSV data files.

Want to plot 5 data sets on the same grid, no problem; Just upload 5 files containing one dataset each. The jQuery-CSV will handle the plumbing while Flot will make it all look pretty.

[jQuery-CSV - Flot Demonstration](http://typeiii.github.io/jquery-csv/examples/flot.html)

## jQuery-CSV + Google Visualization API

OK, I lied. This one is even cooler than Flot. Hike up your fancy pants because these things look slick.

Don't want to draw a line graph, no problem you can tap into the massive collection of different graph types available. Embedded is a fully configurable dashboard.

Warning: You may experience multiple spontaneous 'oh my got that's soo awesome' fits of excitement. Maybe even get stoked. Happens to the best us...

[jQuery-CSV - Google Visualization API Demonstration](http://typeiii.github.io/jquery-csv/examples/google-visualization.html)

**jQuery-CSV** coding style is inherited from the [JQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/)
