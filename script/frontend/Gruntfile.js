module.exports = function (grunt) {
    "use strict";
    var pkg= grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg: pkg,

        jshint: {
            files: [
                'Gruntfile.js',
                '../../src/scripts/widgets/*.js',
                '../../src/scripts/*.js'
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        githooks: {
            init: {
                options: {
                    dest: '../../.git/hooks'
                },
                'pre-commit': 'jshint'
            }
        },

        watch: {
            styles: {
                files: [
                    '../../src/styles/*.scss',
                    '../../src/styles/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: [
                    '../../src/scripts/*.js',
                    '../../src/scripts/**/*.js'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },

        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed',
                sourceComments: true,
                includePaths: [
                    'bower_components/'
                ]
            },
            build: {
                files: {
                    '../../build/styles/app.css': '../../src/styles/app.scss'
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
                    })
                ]
            },
            build: {
                src: '../../build/styles/app.css'
            }
        },

        concat: {
            build: {
                options: {
                    banner: '/*!**********************************************************************************\n' +
                            ' * Package: <%= pkg.name %>\n' +
                            ' * Version: v<%= pkg.version %>\n' +
                            ' * Built  : <%= Date() %>\n' +
                            ' * Authors: <%= _.map(pkg.authors, function (author) { return author.name + " " + "(" + author.email + ")";}).join(",") %>\n' +
                            ' * \n' +
                            ' * Copyright © <%= new Date().getFullYear() %> Mediengestadler\n' +
                            ' ***********************************************************************************/\n',
                    separator: ';'
                },
                src: ['../../build/scripts/main.js'],
                dest: '../../build/scripts/main.js'
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: './bower_components/fontawesome/',
                        src: ['fonts/*'],
                        dest: '../../public/build/media/',
                    },
                    {
                        expand: true,
                        cwd: '../../src/',
                        src: ['media/*', 'media/**/*'],
                        dest: '../../public/build/',
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-githooks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', [
        'jshint',
        'requirejs',
        'concat',
        'copy',
        'sass',
        'postcss'
    ]);
};