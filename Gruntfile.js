Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Gist
 @MadzMadzik
 Sign out
 Watch 0
  Star 0
  Fork 0 MadzMadzik/Kodilla-Grunt
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Settings Insights 
Branch: master Find file Copy pathKodilla-Grunt/gruntfile.js
239e2ff  25 days ago
@MadzMadzik MadzMadzik updates
1 contributor
RawBlameHistory     
59 lines (55 sloc)  1.23 KB
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    },
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
},
  
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  // Default task(s).
  grunt.registerTask('default', ["sass", "browserSync", "imagemin", "watch"]);
};
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help