module.exports = function( grunt ) {
    grunt.config('autoprefixer', {
        dist: {
            src: 'styles/css/main.css',
            dest: 'styles/css/main.css'
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};
