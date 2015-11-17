module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    var pkgjson = require('./package.json');

    // Configuration
    grunt.initConfig({
        config: {
            name: 'react-playground',
            pkg: pkgjson,
            app: 'src',
            dist: 'dist',
            bower: 'bower_components/**',
            pub: 'public',
            assets: 'assets'
        },
        pkg: this.config.pkg,

        clean: {
            dist: '<%= config.dist %>',
            pub: '<%= config.pub %>'
        },

        bump: {
            options: {
                files: ['bower.json', 'package.json'],
                commitMessage: 'Release %VERSION%',
                commitFiles: ['bower.json', 'package.json'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                pushTo: 'origin'
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },

                files: {
                    '<%= config.pub %>/third-party-non-bundled.css': '<%= config.app %>/scss/third-party-non-bundled.scss'
                }
            },
            min: {
                options: {
                    style: 'compressed',
                    sourcemap: false
                },

                files: {
                    '<%= config.dist %>/css/appSpider.dev.min.css': '<%= config.app %>/scss/main.min.scss'
                }
            }
        },

        copy: {
            assets: {
                files: [
                    {src : '<%= config.assets %>/*', dest : '<%= config.pub %>/', expand: true, flatten: true},
                    {src : 'node_modules/react-bootstrap-table/css/react-bootstrap-table.min.css', dest : '<%= config.pub %>/', expand: true, flatten: true},
                    {src : 'node_modules/react-dragula/dist/dragula.min.css', dest : '<%= config.pub %>/', expand: true, flatten: true}
                ]
            }
        },

        shell: {
            devServer: {
                command: ['node server.js', 'npm run watch'].join('&')
            },
            webpack: {
                command: 'npm run build'
            }
        }
    });

    grunt.registerTask('build', ['clean', 'sass:min', 'shell:webpack']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('dev', ['clean', 'sass:dev', 'copy', 'shell:devServer']);
};
