var path = require('path');

module.exports = function(grunt) {

    if (grunt.multik) {
        var dependency = grunt.multik.currentDependency;
        var dependSrc = path.join(dependency.directory, 'src');

        if (dependency.group === 'mygroup') {

            grunt.initConfig({
                dependency: dependency,
                copy: {
                    src: {
                        files: [{
                                expand: true,
                                cwd: '<%= dependency.directory %>/src',
                                src: '**',
                                dest: 'build/lib/<%= dependency.name %>'
                            }]
                    }
                },
                watch: {
                    files: [
                        path.join(dependSrc, '**/*')
                    ],
                    tasks: ['copy:src']
                }

            });

            // Default task(s).
            grunt.registerTask('default', ['copy']);

        } else if (dependency.name === 'demo-repo1') {

            grunt.registerTask('default', []);

        } else {

            grunt.registerTask('default', []);

        }

    } else {

        grunt.initConfig({
            dependency: dependency,
            copy: {
                src: {
                    files: [{
                            expand: true,
                            cwd: 'src',
                            src: '**',
                            dest: 'build'
                        }]
                }
            },
            watch: {
                files: ['src/**/*'],
                tasks: ['copy:src']
            }
        });

        grunt.registerTask('default', ['copy']);
    }

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
};