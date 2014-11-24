/*global module:false*/
module.exports = function( grunt ) {

    if(!grunt.file.exists('vendor/jquery')) {
        grunt.fail.fatal('>> Please run "bower install" before continuing.');
    }

    // Project configuration.
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        files:{
            styles:[
                'styles/scss/**/*.scss'
            ],
            assemble: [
                'src/**/*.hbs',
                'src/**/*.yml'
            ],
            js: [
                'js/src/**/*.js'
            ]
        },
        watch:{
            styles:{
                files:['<%= files.styles %>'],
                tasks:['css']
            },
            assemble: {
                files: ['<%= files.assemble %>'],
                tasks: ['assemble']
            },
            js: {
                files: ['<%= files.js %>'],
                tasks: ['js']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadTasks('grunt-config');

    // Default task.
    grunt.registerTask('html', ['assemble']);
    grunt.registerTask('css',['sass','autoprefixer']);
    grunt.registerTask('svg', [
        'svgmin' // minify the svgs
    ]);
    grunt.registerTask('js',['requirejs']);
    grunt.registerTask('default',['css','js','html']);

};
