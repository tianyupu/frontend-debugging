/* global module:false */
module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    xpkg: grunt.file.readJSON('package.json'),

    connect: {
      slides: {
        options: {
          hostname: '0.0.0.0',
          port: 8000,
          base: 'src',
          keepalive: true,
          open: true,
        }
      }
    }
  });
  
  // Dependencies
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Serve presentation locally
  grunt.registerTask('slides', [ 'connect:slides']);
};
