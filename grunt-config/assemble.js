module.exports = function( grunt ) {

    grunt.config('assemblePaths', {
        src: 'src',
        dist: 'dist'
    });
    grunt.config( 'assemble', {
        // Read the config for the assemble task
        options:{
            flatten:true,
            assets: '<%= assemblePaths.dist %>/assets',
            prettify: {indent: 2},
            postprocess: require('pretty'),

            // Metadata
            pkg:'<%= pkg %>',
            data:['<%= assemblePaths.src %>/data/*.{json,yml}'],

            // Templates
            partials: [
                '<%= assemblePaths.src %>/templates/partials/**/*.hbs'
            ],
            // Extensions
            helpers: [
                '<%= assemblePaths.src %>/helpers/*.js',
                'handlebars-helpers'
            ]
        },
        compile: {
            options: {
                layout: '<%= assemblePaths.src %>/templates/layouts/default.hbs'
            },
            expand: true,
            cwd: '<%= assemblePaths.src %>/pages',
            src: ['*.hbs'],
            dest: '<%= assemblePaths.dist %>'
        }
    });

    grunt.loadNpmTasks('assemble');
};
