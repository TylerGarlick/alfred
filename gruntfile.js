'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      default: {
        files: {
          "public/css/app.css": "public/css/app.less"
        }
      }
    },
    'sails-linker': {
      defaultOptions: {
        options: {
          startTag: '<!--SCRIPTS-->',
          endTag: '<!--SCRIPTS END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: 'public/'
        },
        files: {
          // Target-specific file lists and/or options go here.
          'public/index.html': ['public/app/**/*.js']
        }
      }
    },
    watch: {
      css: {
        files: 'public/css/**/*.less',
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['public/app/**/*.html', 'public/index.html'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'public/app/**/*.js',
        tasks: ['sails-linker'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'sails-linker', 'watch']);
};