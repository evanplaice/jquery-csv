
## Why hook?

CSV as a data format is very loosely implemented. Part of what makes it so versatile is the lack of specific rules to enforce how it should be used. Unfortunately, without such rules it becomes a lot more difficult to define how the data should be interpreted.

To keep the library size small and avoid baking in a ton of domain-specific 'magic', an extensible architecture is provided whereby users can define their own 'magic'.

## How it works

Hooks work by defining a user-defined function that will be used inline during the parsing process. The point where it's called during parsing depends on the hook used.

To use a hook, simply attach a function callback (ie anonymous function) of your design to the hook in the parser options object.

No really... it's that easy.

## Available Hooks

### onPreParse()

This hook is called before the parser starts processing the dataset. Useful if you need to make a pass to 'clean' the data first.

*Usage:*

```javascript
// strips empty (illegal) lines from the data before parsing 
var removeEmptyLines = function(csv) {
  var lines = $.csv.splitLines(csv);
  var output = [];
  for(var i=0, len=lines.length; i<len; i++) {
    if(lines[i] !== '') {
      output.push(lines[i]);
    }
  }
  return output.join('\n');
}; 
$.csv.toArrays(csv, { onPreParse: removeEmptyLines });
```

### onParseEntry()

This hook is called each time an entry is parsed and before the entry is broken down further into values. Useful if you need to modify specific entries, or process-by-row.

*Usage:*

```javascript
// signals to only parse rows 3 and 4
var rowRange = function(entry, state) {
  var start = 3;
  var end = 4;
  if(state.rowNum >= start && state.rowNum <= end) {
    return entry;
  }
  return false;
}  
$.csv.toArrays(testHook3, { onParseEntry: rowRange });
```

### onParseValue()

This hook is called each time a value is parsed. Useful if you want to modify the output values inline, or process-by-column.

*Usage:*

```javascript
// signals to only parse columns 4 and 5
var columnRange = function(value, state) {
  var start = 4;
  var end = 5;
  if(state.colNum >= start && state.colNum <= end) {
    return value;
  }
  return false;
}
$.csv.toArrays(testHook2, { onParseValue: columnRange });
```

### onPostParse()

This hook is called after the parser is complete. Useful if you want to modify the output data.

*Usage:*

```javascript
// sort the 2D array by the value of the second column
var sortByCol2 = function(data) {
  data.sort(function(a,b){
    return a[1] - b[1];
  });
  return data;
}
$.csv.toArrays(csv, { onPostParse: sortByCol2 });
```

## Available User-Defined Callbacks

So... I lied when I said that the library won't provide any user-defined hook callbacks. Some are just too common and valuable to leave out.

The following will outline the user-defined callbacks that will be provided with the library by defaults.

### $.csv.hooks.castToScalar(value)

This is a onParseValue callback that detects and casts all output values to the correct type.

*Usage:*

```javascript
var csv = '734,4.5,sda,"555","4523.35","af323"';

var data = $.csv2Array(csv, {
      onParseValue: $.csv.hooks.castToScalar
    });
console.log(data);
Output:

[
  734,
  4.5,
  "sda",
  555,
  4523.35,
  "af323"]
]
```

Aside: There are plenty more use-cases to be discovered for the plethora of hooks. If you feel like you have one that is common enough to justify adding it to the library we'd like to see it. Just create a new 'feature request' in the 'issues' section outlining the details.
