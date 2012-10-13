node-jQuery
====

A stupid-simple wrapper over jQuery for  Node.JS (server). Currently 1.7.2.

Node.JS
---

    npm install jQuery

    var $ = require('jQuery');


Examples
---

    $("<h1>test passes</h1>").appendTo("body");
    console.log($("body").html());

In Node.JS you may also create separate window instances

    var jsdom = require('jsdom').jsdom
      , myWindow = jsdom().createWindow()
      , $ = require('jQuery')
      , jq = require('jQuery').create()
      , jQuery = require('jQuery').create(myWindow)
      ;

    $("<h1>test passes</h1>").appendTo("body");
    console.log($("body").html());

    jq("<h2>other test passes</h2>").appendTo("body");
    console.log(jq("body").html());

    jQuery("<h3>third test passes</h3>").appendTo("body");
    console.log(jQuery("body").html());

Output:

    <h1>test passes</h1>
    <h2>other test passes</h2>
    <h3>third test passes</h3>

JSONP Example
----

    var $ = require('jQuery');

    $.getJSON('http://twitter.com/status/user_timeline/treason.json?count=10&callback=?',function(data) {
      console.log(data);
    });


