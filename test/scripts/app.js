require.config({
  baseUrl: '/',
  paths: {
    'jquery'        : '../../node_modules/jquery/dist/jquery',
    'jquery-csv'    : '../../src/jquery.csv',
    'mocha'         : '../../node_modules/mocha/mocha',
    'chai'          : '../../node_modules/chai/chai',
  },
  shim: {
    'mocha': { 
      exports: 'mocha'
    },
    'chai': {
      exports: 'chai'
    },
    'jquery-csv' : {
      deps: ['jquery'],
      exports: 'jQuery.fn.csv',
    }
  },
});

define(function(require, exports, module) {
  require('jquery');
  require('jquery-csv');
  
  // chai setup
  var chai = require('chai');
  var expect = chai.expect();
  var should = chai.should();

  // mocha setup
  var mocha = require('mocha');
  mocha.setup('bdd');
  mocha.reporter('html');
  mocha.bail(false);
 
  require(['test.js'], function(require) {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });
});
