module.exports = function( grunt ) {
    grunt.config( 'sass', {
        dist: {
            options: {
                style: 'compressed',
                quiet: true
                //require: 'susy'
            },
            files: {
                'dist/assets/css/main.css': 'src/scss/main.scss'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
};
