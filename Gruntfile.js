module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1200,
            suffix: '_large_2x',
            quality: 50
      }, {
        width: 800,
            suffix: '_large_1x',
            quality: 50
          }, {

            width: 600,
            suffix: '_medium',
            quality: 50
          }

      ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,jpeg,png}'],
          cwd: 'img/',
          dest: 'dest/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
