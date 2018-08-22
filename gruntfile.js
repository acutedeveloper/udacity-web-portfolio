/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
              width: 2320,
              quality: 30
            },
            {
              width: 1600,
              quality: 30
            },
            {
              width: 800,
              quality: 30
            },
            {
              width: 480,
              quality: 30
            },
            {
              width: 275,
              quality: 30
            }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'sources/images/',
          dest: 'assets/img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Page Speed Test */
    pagespeed: {
      options: {
        nokey: true,
        url: "http://localhost/courses/udacity-frontend-developer/design-mockup-portfolio"
      },
      paths: {
        options: {
          paths: ["/"],
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
  grunt.registerTask('pagespeed', ['pagespeed']);


};
