module.exports = function( grunt ) {
    grunt.config('autoprefixer', {
        dist: {
            src: 'dist/assets/css/main.css',
            dest: 'dist/assets/css/main.css'
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};
