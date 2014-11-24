module.exports = function( grunt ) {
    // https://github.com/filamentgroup/grunticon#readme
    grunt.config( 'clean', {
        html: {
            src: ['dist/*.html']
        },
        svg: {
            src: ['img/minified-svg','styles/css/grunticon']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
