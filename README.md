*Notice: This is a continuation of the jquery-csv project hosted on Google Code.*

#jquery-csv

##Summary

Javascript is growing up and HTML is finally maturing the point where webapps are being built to completely displace desktop applications. It's about time that the supporting libraries grow up too.

Looking for a complete, end-to-end, battle tested, performance optimized CSV parser that's available in the familiar jQuery syntax style? Welcome...

This library is a different creature, featuring a slim Chomsky - Type III parser implementation. Full (that means 100%) [IETF RFC 4180](http://tools.ietf.org/html/rfc4180) compliance. Including coverage for a few edge cases that even the spec fails to cover.

Enough with the wind-up...

Want to see it in action? Check out the [Basic Usage Demo](http://evanplaice.github.io/jquery-csv/examples/basic-usage.html).

Want more? The Use Cases section below has what you need.

Aside: To the script kiddies... Don't be sad, we bet there are still plenty of people who would like to hear you outline the merits of `str.split()`.

##Features

* Convert a CSV String to an array
* Convert a multi-line CSV string to a 2D array
* Convert a multi-line CSV string to an array of objects (ie header:value pairs)
* Convert an array of values to CSV (under development)
* Convert an array of objects to CSV (under development)
* Hooks/Callbacks to extend the default parsing process
* Customizable delimiter (default: ") and separator (default: ,) characters
* Node.js support (ie CommonJS importing and async callback support)

## Syntax

###Importing

**Client-Side** (ie browser) - import via the script element.
```javascript
<script src="jquery-csv.js"></script>
```

**Server-Side** (ie Node.js) - Import via the standard CommonJS approach.
```javascript
var $ = jQuery = require('jquery');
require('./jquery.csv.js');
```

###Usage

Each one of the methods can be called with the following form:
```javascript
$.csv.function(csv, {options}, callback);
```

| Name		  |           | Description |
|-----------|-----------|:------------|
| csv		    | required	| The csv data to be transformed. |
| options	  | optional	| An object containing user-defined overrides for the default options. |
| callback	| optional	| Used for Node.js-style async callbacks. Uses the form function(err, data). |

###Methods

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

## Documentation

- [API](./docs/api.md)
- [Hooks & Callbacks](./docs/hooks-callbacks.md)
- [Algorithm](./docs/algorithm.md)

## Use Cases

What fun is having a shiny new library without examples to play with?

No fun that's what... That is coming from a guy who has spent entirely too much time mucking through API documentation when he'd much rather be out at the beach, surfing, or chasing girls.

Instead of the typical useless contrived example code, I have provided a handful of simple yet powerful demos. Not only are they fun to play with but a quick peak at the source will show you how simple and easy they were to implement.

Who knows... maybe this whole 'having fun' concept may spread to some of the other Open Source libraries as a result. One can dream...

### Basic Usage

Want to play with the parser and maybe validate your CSV data without all the frills? No need to download the source first, there's a demo for that...

[jQuery-CSV - Basic Usage Demonstration](http://evanplaice.github.io/jquery-csv/examples/basic-usage.html)

### Client-Side File Handling

Yes, you read that right. It's now possible to open local files in the browser without firing a single request to the server.

The functionality is still pretty new so not all browsers support it (I'm looking @ you IE). If that's not an issue I highly suggest you try it. It's much easier than the traditional client/server approach.

[jQuery-CSV - File Handling Demonstration](http://evanplaice.github.io/jquery-csv/examples/file-handling.html)

### jQuery-CSV + Flot

Hands down, the most exciting addition to the demo collection so far...

You can input the data set using either the text area provided or via uploading CSV data files.

Want to plot 5 data sets on the same grid, no problem; Just upload 5 files containing one dataset each. The jQuery-CSV will handle the plumbing while Flot will make it all look pretty.

[jQuery-CSV - Flot Demonstration](http://evanplaice.github.io/jquery-csv/examples/flot.html)

### jQuery-CSV + Google Visualization API

OK, I lied. This one is even cooler than Flot. Hike up your fancy pants because these things look slick.

Don't want to draw a line graph, no problem you can tap into the massive collection of different graph types available. Embedded is a fully configurable dashboard.

Warning: You may experience multiple spontaneous 'oh my got that's soo awesome' fits of excitement. Maybe even get stoked. Happens to the best us...

[jQuery-CSV - Google Visualization API Demonstration](http://evanplaice.github.io/jquery-csv/examples/google-visualization.html)

### jQuery-CSV + Node.js

What's better than a powerful JavaScript? platform in the browser. A second, even more powerful JavaScript? platform on the server.

And... jQuery-CSV fully supports it. There is not online demo because it requires a Node.js server to run but a stub is provided to help get you started.

Dependencies:

To make this example work, you'll also need to install jQuery via the NPM.

```npm install jquery```

The link to the stub:

[node-usage.js](http://evanplaice.github.io/jquery-csv/examples/node-usage.js)

### Client-Side Database Import

Wait... what? Don't databases require a server-side API? Not if the data access layer implements a REST API that accepts JSON POST updates.

When it comes to databases, CSV is still a favored format for data dumps because it's simple, lightweight, and platform agnostic. It's possible to expose a server-side SaaS service to handle the data conversion but that would involve more web requests, more bandwidth, more CPU time, and more unnecessary strain on the webserver.

I hear web browsers are becoming more powerful, lets use those...

It will require [jQuery-JSON]() to handle the data (de)serialization but the chain from a CSV file to an AJAX POST request is very simple.

Open a .csv file Locally (HTML5 File API) -> jQuery-CSV -> jQuery.JSON -> jQuery.POST

(planned HTML example needs to be added to the repository)

## Long-Term Development

1.0 will be the first long-term stable release. The API will be locked until the next major release. New functionality-breaking and/or backwards incompatible changes will be introduced into the master branch.

## Short-Term Development

0.8.0 The first stable release following the migration to GitHub from Google Code.

* The parser is fully featured and mostly bug free
* The TODO list includes re-vamping of the Documentation & examples
* Tests will be revisited and work will be done to add headless browser testing support.
* NPM support will be added
* Hopefully, Bower support can be transferred over from Mirlord and updated to the latest.

## How You Can Help

**Run the test runner:** Just run the **tests** in your particular brand of browser and report any failures.

**We need performance tests:** Performance tests in javascript would add a lot of value to the project. If that's your forte, don't be shy.

**Provide feedback:** If you have a good suggestion, a useful use case, or just want to share your experience, don't hesitate to get involved.

Without your contributions and the contributions of the community, this would be just another half-baked CSV to add to the pile of literally thousands of broken/incomplete implementations. The quality of projects like these is a direct result of a greater community that is willing to suggest improvements and test the code.

**jQuery-CSV** coding style is inherited from the [JQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/)

by **Evan Plaice**

