'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": "nofunc",
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "unused": true,
        "boss": true,
        "eqnull": true,
        "node": true,
        "mocha": true,
        "ignores": ['test/require.js', 'src/jquery.csv.min.js']
      },
      tasks: {
        src: ['examples/*.js', 'src/*.js', 'test/*.js']
      },
    },
    htmlhint: {
      build: {
        options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'spec-char-escape': true,
            'id-unique': true,
            'head-script-disabled': true,
            'style-disabled': false
        },
        src: ['examples/*.html', 'test/test.html']
      }
    },
    uglify: {
      build: {
        files: {
            'src/jquery.csv.min.js': ['src/jquery.csv.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
