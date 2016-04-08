module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        watch: {
            styles: {
                files: [
                    'src/styles/*.scss',
                    'src/styles/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: [
                    'src/scripts/*.js',
                    'src/scripts/**/*.js'
                ],
                tasks: ['browserify'],
                options: {
                    spawn: false
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/',
                        src: ['fonts/*'],
                        dest: 'build/media/',
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['media/*', 'media/**/*'],
                        dest: 'build/',
                    }
                ]
            }
        },
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed',
                sourceComments: false,
                includePaths: [
                    'node_modules/'
                ]
            },
            build: {
                files: {
                    'build/styles/app.css': 'src/styles/app.scss'
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
                src: 'build/styles/app.css'
            }
        },
        browserify: {
            build: {
                options: {
                    transform: [
                        [
                            'babelify'
                        ]
                    ]
                },
                src: 'src/scripts/main.js',
                dest: 'build/scripts/main.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'build/scripts/main.js': 'build/scripts/main.js'
                }
            }
        },
        concat: {
            js: {
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
                src: ['build/scripts/main.js'],
                dest: 'build/scripts/main.js'
            },
            css: {
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
                src: ['build/styles/app.css'],
                dest: 'build/styles/app.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-githooks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'copy',
        'sass',
        'postcss',
        'browserify',
        'uglify',
        'concat'
    ]);
};