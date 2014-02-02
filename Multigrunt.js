module.exports = function(grunt) {

    if (!grunt.multik){
        return;
    }

    var dependency = grunt.multik.currentDependency;

    if (dependency.group === 'mygroup'){
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json')
        });

        // Default task(s).
        grunt.registerTask('default', []);

        grunt.registerTask('default', []);
    } if (dependency.name === 'demo-repo1')

        grunt.registerTask('default', []);

    else{

        grunt.registerTask('default', []);
    }

};