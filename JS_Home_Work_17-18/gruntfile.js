module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['src/js/*.js'],
                dest: 'dest/js/script.main.js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'dest/css/style.main.css'
            },
            addImport: {
                options: {
                    process: function (src, filepath) {
                        return "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css);" + src;
                    }
                },
                files: {
                    'dest/css/style.main.css': ['dest/css/style.main.css']
                }
            }
        },

        uglify: {
            js: {
                src: ['dest/js/script.main.js'],
                dest: 'dest/js/script.main.js'
            }
        },

        cssmin: {
            css: {
                src: ['dest/css/style.main.css'],
                dest: 'dest/css/style.main.css'
            },
        },

        imagemin: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dest/img/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.css'],
                tasks: ['concat', 'uglify', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'concat:addImport', 'imagemin']);
};