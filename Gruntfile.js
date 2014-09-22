module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		less: {
			compileCore: {
				options: {
					strictMath: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: '<%= pkg.name %>.css.map',
					sourceMapFilename: 'css/<%= pkg.name %>.css.map'
				},
				src: 'less/ipm.less',
				dest: 'css/<%= pkg.name %>.css'
			}
		},
		cssmin: {
			default: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['<%= pkg.name %>.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}	});

	// Load required modules
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Task definitions
	grunt.registerTask('default', [
		'less',
		'cssmin'
	]);
};
