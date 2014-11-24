module.exports = function( grunt ) {
    grunt.config('uglify', {
        options: {
            preserveComments: 'false',
            mangle: true,
            compress: true,
            beautify: false
        },
        dist: {
            files: {
                'dist/assets/js/<%= pkg.name %>.min.js': [
                    'vendor/jquery/dist/jquery.js',
                    'src/js/main.js'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
