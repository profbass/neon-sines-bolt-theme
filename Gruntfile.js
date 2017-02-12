'use strict';
 
module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        watch: {
            styles:{
                files: "less/**/*.less",
                tasks: ["less"]
            },
            scripts: {
                files: 'js/**/*.js',
                tasks: ['uglify']
            },
        },
        less: {
            ns: {
                options: { 
                    paths: ["css/"], // Specifies directories to scan for @import directives when parsing.
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // compilation.css  :  source.less
                    "css/ns.min.css": "less/app.less"
                }
            },
        },
        uglify:{
             ns: {
                files: {
                  'js/ns.min.js': ['js/app.js','js/stars.js','js/parallax.js']
                },
                options: {
                  mangle: false
                }
            }
        },
    });
     grunt.registerTask('default', ['less','uglify','watch']);
};