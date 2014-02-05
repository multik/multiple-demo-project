module.exports = function(grunt) {

    if (grunt.multik) {
        var dependency = grunt.multik.currentDependency;

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
            }
        });

        grunt.registerTask('default', ['copy']);
    }

    grunt.loadNpmTasks('grunt-contrib-copy');
};