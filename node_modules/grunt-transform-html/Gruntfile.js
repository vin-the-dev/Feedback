/*
 * transform_html
 * https://github.com/kriserickson/grunt-static-ejs
 *
 * Copyright (c) 2013 Kris Erickson
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {

    'use strict';

    grunt.loadTasks('tasks');


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    grunt.initConfig({

        clean: {
            test: ['test/results/*']
        },
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
        },

        nodeunit: {
            tests: ['test/transform_html_test.js']
        }

    });



    // test
    grunt.registerTask('test', [
        'clean:test',
        'transform_html:test_simple_production',
        'transform_html:test_simple_development',
        'transform_html:test_html_page_production',
        'transform_html:test_html_page_development',
        'nodeunit'
    ]);

};
