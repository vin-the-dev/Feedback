/*
 * grunt-transform-html
 */

/*jshint node:true */
/*global grunt:false */

module.exports = function (grunt) {
    'use strict';



    // Please see the grunt documentation for more information regarding task and
    // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

    // ==========================================================================
    // TASKS
    // ==========================================================================

    grunt.registerMultiTask('transform_html', 'Transform html', function () {
        if (!this.data) {
            return false;
        }

        if (typeof this.data === 'object' && this.data.src && this.data.dest) {
            transformHtml(this.data);
        } else {
            grunt.log.writeln("Transform html accepts multiple targets");
            grunt.log.writeln("    transform_html : {");
            grunt.log.writeln("        src :  'path/to/src',");
            grunt.log.writeln("        dest : 'path/to/dest',");
            grunt.log.writeln("        target : 'PRODUCTION' [optional, defaults to PRODUCTION]");
            grunt.log.writeln("    }");
        }
        return true;
    });

    // ==========================================================================
    // HELPERS
    // ==========================================================================
    function doTransform(text, target) {
       var replaceOtherRegex = new RegExp('<!-- (@@((?!' + target + ').)+@@)[\\s\\S]+\\1 -->', 'g'),
           removeCommentsRegex = new RegExp('<!-- @@' + target + '@@.*$', 'mg');

        return text.replace(replaceOtherRegex, '').replace(removeCommentsRegex, '');

    }


    function transformHtml(data) {

        if (typeof data.src !== 'string') {
            grunt.log.writeln('WARN: src must be a string');
            return;
        }
        if (typeof data.dest !== 'string') {
            grunt.log.writeln('WARN: dest must be a string');
            return;
        }

        var fs = require('fs'),
            path = require('path'),
            src = path.resolve(data.src),
            dest = path.resolve(data.dest),
            target = data.target || 'PRODUCTION',
            done = grunt.task.current.async();

        fs.readFile(src, 'utf-8', function (err, text) {
            if (err) {
                grunt.log.writeln('WARN: error reading ' + data.src);
                done(false);
            } else {

                var result = doTransform(text, target);
                if (result) {
                    fs.writeFile(dest, result, function (err) {
                        if (err) {
                            grunt.log.writeln('WARN: saving to ' + data.dest);
                            done(false);
                        } else {
                            done(true);
                        }
                    });
                } else {
                    grunt.log.writeln('WARN: error transforming ' + data.src);
                    done(false);
                }
            }

        });


    }

};
