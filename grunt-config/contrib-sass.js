module.exports = function( grunt ) {
    grunt.config( 'sass', {
        dist: {
            options: {
                style: 'compressed',
                quiet: true
                //require: 'susy'
            },
            files: {
                'styles/css/main.css': 'styles/scss/main.scss'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
};
