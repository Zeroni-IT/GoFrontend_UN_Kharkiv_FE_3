module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            scripts: {
                files: 'js/src/*.js',
                tasks: ['babel'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        },

        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js/src',
                    src: ['*.js'],
                    dest: 'js/build',
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },

    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['babel']);
};