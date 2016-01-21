## Introduction

The following will cover the core utilities provided by `jquery-csv`.

The project's home page outlines the most general use cases but this library is capable of much more. If you're interested in learning some of the more advanced capabilities of this library, then you're in the right place.

Note: To avoid confusion, assume that the terms row/entry and column/value as both will be used interchangeably.

## Namespaces

To keep the library out of the global namespace, everything contained in this library has been organized into a hierarchy of namespaces.

### $.csv

The top-level namespace where you will find the primary parser methods and the utility functions needed by them.

### $.options

A namespace containing the default option values for the library. If you're looking to change the defaults (as opposed to overriding them) this is where you may do so.

### $.config

Created after parser initialization. This is where the settings can be read/modified for an active parser instance.

### $.state

Created after parser initialization. This is where the current state of the parser can be read/modified.

### $.hooks

A namespace containing helpful user-defined hook callbacks. For more information on what's available refer to the Hooks? page.

### $.parsers

Where the parser methods live. They're useful if you just need access to a CSV-specific split-lines function, or a single-entry parser. You can also override the default parser by changing these values inline.

## Core Methods

The following methods make up the core of the jquery-csv library.

### $.csv.toArray()
Useful for parsing a single entry of CSV data into an array of `[values]`.

*Structure:*

```javascript
$.csv.toArray(csv, options, callback)
```

*Parameters:*

- csv (required)
  - a string of CSV data
- options (optional)
  - contains a list of user-configurable options
- callback (optional)
  - used for node.js and/or asynchronous processing of data
  - used to define the callback that is executed when parsing is complete
  - the callbacks take the standard form [function(err, data){}]

*Options:*

- separator
  - an override for the separator character
  - defaults to a comma(,)
- delimiter
  - an override for the delimiter character
  - defaults to a double-quote(")

### $.csv.toArrays()

Useful for parsing multi-line CSV data into a two-dimensional array of `[record][values].`

*Structure:*

```javascript
$.csv.toArrays(csv, options, callback)
```

*Parameters:*

- csv (required)
  - a string of CSV data
- options (optional)
  - contains a list of user-configurable options
- callback (optional)
  - used for node.js and/or asynchronous processing of data
  - used to define the callback that is executed when parsing is complete
  - the callbacks take the standard form [function(err, data){}]

*Options:*

- separator
  - an override for the separator character
  - defaults to a comma(,)
- delimiter
  - an override for the delimiter character
  - defaults to a double-quote(")
- startIndex (not implemented)
  - the line where the parser should start processing
  - defaults to 1 (non-zero based counting)
- endIndex (not implemented)
  - the line the parser should stop after
  - defaults to EOF

### $.csv.toObjects()

Useful for parsing multi-line CSV data into an array of objects representing data in the form `[record][{header:value}]`.

Unless overridden, the first line of data is assumed to contain the headers.

*Structure:*

```javascript
$.csv.toObjects(csv, options, callback)
```

*Parameters:*

- csv (required)
  - a string of CSV data
- options (optional)
  - contains a list of user-configurable options
- callback (optional)
  - used for node.js and/or asynchronous processing of data
  - used to define the callback that is executed when parsing is complete
  - the callbacks take the standard form [function(err, data){}]

*Options:*

- separator
  - an override for the separator character
  - defaults to a comma(,)
- delimiter
  - an override for the delimiter character
  - defaults to a double-quote(")
- headerIndex (not implemented)
  - the line containing the headers
  - defaults to 1 (non-zero based counting)
- startIndex (not implemented)
  - the line where the parser should start processing
  - defaults to 2 (non-zero based counting)
- endIndex (not implemented)
  - the line the parser should stop after
  - defaults to EOF

## Helper Method(s)

The following methods may or may not be useful unless you're trying to tackle a specific use case. These methods make up some of the magic that makes the library work.

Warning: Replace and/or modify these at your own risk. Their purpose is to override the internal behavior of the parser. Don't expect support if your custom implementation introduces bugs.

```javascript
$.csv.splitLines(csv)
```

An advanced line splitter that converts a CSV data string into an array of CSV entries represented in string form.

As opposed to the commonly used string.split() function, this is a more advanced line splitting implementation capable of ignoring new-lines contained in the value data.

Splitting data by lines may sound trivial (no split('\n) does not work) but under the covers it required the development a special lexer tailored specifically to handle CSV data.

*Structure:*

```javascript```
$.csv.parsers.splitLines(csv, options)
```

*Parameters:*

- csv (required)
  - a string of CSV data
- options (optional)
  - contains a list of user-configurable options

*Options:*

- separator
  - an override for the separator character
  - defaults to a comma(,)
- delimiter
  - an override for the delimiter character
  - defaults to a double-quote(")