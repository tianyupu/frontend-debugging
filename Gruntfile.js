/* global module:false */
module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    xpkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 8000,
          base: 'src',
          open: true,
          livereload: true
        }
      }
    },

		watch: {
      options: {
        livereload: true
      },
      slides: {
        files: [ 'src/**/*' ]
      }
		}

  });
  
  // Dependencies
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Serve presentation locally
  grunt.registerTask('slides', [ 'connect', 'watch' ]);
};
