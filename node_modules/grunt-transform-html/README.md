grunt-transform-html
====================

[![Build Status](https://travis-ci.org/kriserickson/grunt-transform-html.png?branch=master)](https://travis-ci.org/kriserickson/grunt-transform-html)

Simple HTML Transformation in Grunt.  Used to switch between devel and production files.


usage:

      transform_html:{
            dist:{
                src:'app/index.html',
                dest:'dist/index.html',
                target:'PRODUCTION'
            }
        }

to convert multiple files

        transform_html: {
            test_simple_production : {
                src: 'test/source/test_simple.html',
                dest: 'test/results/test_simple_production.html',
                target:'PRODUCTION'
            },
            test_simple_development: {
                src: 'test/source/test_simple.html',
                dest: 'test/results/test_simple_development.html',
                target:'DEVELOPMENT'
            },
            test_html_page_production : {
                src: 'test/source/test_html_page.html',
                dest: 'test/results/test_html_page_production.html',
                target:'PRODUCTION'
            },
            test_html_page_development: {
                src: 'test/source/test_html_page.html',
                dest: 'test/results/test_html_page_development.html',
                target:'DEVELOPMENT'
            }
        }
        
        
