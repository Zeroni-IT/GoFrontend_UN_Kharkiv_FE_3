module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/css/style.main.css': 'src/css/style.main.scss'
                }
            }
        },

        includereplace: {
            html: {
                src: 'index.html',
                dest: 'build/',
                expand: true,
                cwd: 'src/'
            }
        },

        clean: {
            build: [
                'build/**',
            ]
        },

        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['src/js/*.js'],
                dest: 'build/js/script.main.js'
            }
        },

        uglify: {
            js: {
                src: ['build/js/script.main.js'],
                dest: 'build/js/script.main.js'
            }
        },

        cssmin: {
            css: {
                src: ['build/css/style.main.css'],
                dest: 'build/css/style.main.css'
            },
        },

        imagemin: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.scss', 'src/html/*.html'],
                tasks: ['concat', 'uglify', 'includereplace', 'sass', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-replace');

    grunt.registerTask('default', [
        'clean',
        'concat',
        'uglify',
        'includereplace',
        'imagemin',
        'sass',
        'cssmin'
    ]);
};