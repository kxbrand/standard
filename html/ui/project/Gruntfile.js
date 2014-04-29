module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            main: ['.build']
        },
        transport: {
            options: {
                paths: ['source/jslib'],
                alias: '<%= pkg.config.alias %>'
            },
            alljs: {
                options: {
                    idleading: '<%= pkg.config.grunt.jsfolder %>'
                },
                files: [{
                    expand: true,
                    cwd: 'source/jslib/<%= pkg.config.grunt.jsfolder %>',
                    src: '**/*.js',
                    dest: '.build/transport/js/<%= pkg.config.grunt.jsfolder %>'
                }]
            }
        },
        concat: {
            alljs: {
                options: {
                    include: 'relative',
                    paths: ['source/jslib'],
                    alias: '<%= alias %>'
                },
                files: [{
                    expand: true,
                    cwd: '.build/transport/js/<%= pkg.config.grunt.jsfolder %>',
                    src: '**/*.js',
                    filter: function(filepath) {
                        return !/(.*plugins.*\.js)|(.*mod.*\.js)|(-debug\.js)$/.test(filepath);
                    },
                    dest: '.build/concat/js/<%= pkg.config.grunt.jsfolder %>'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*!kxbrand(http://www.kxbrand.net)-<%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            allutils:{
                files: [{
                    expand: true,
                    cwd: 'pub/pub/jslib/<%= pkg.config.grunt.utilsfolder %>',
                    src: '**/*.js',
                    dest: 'pub/pub/jslib/<%= pkg.config.grunt.utilsfolder %>'
                }]
            },
            allplugins:{
                files: [{
                    expand: true,
                    cwd: 'pub/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>',
                    src: '**/*.js',
                    dest: 'pub/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>'
                }]
            },
            alljs: {
                files: [{
                    expand: true,
                    cwd: '.build/concat/js/<%= pkg.config.grunt.jsfolder %>',
                    src: '**/*.js',
                    dest: 'pub/jslib/<%= pkg.config.grunt.jsfolder %>'
                }]
            }
        },
        jshint: {
            files: ['Gruntfile.js','source/jslib/<%= pkg.config.grunt.jsfolder %>/**/*.js','!source/jslib/plugins/**/*.js','!source/pub/jslib/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*!kxbrand(http://www.kxbrand.net)-<%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            allutils:{
                files: [{
                    expand: true,
                    cwd: 'pub/pub/jslib/<%= pkg.config.grunt.utilsfolder %>',
                    src: '**/*.css',
                    dest: 'pub/pub/jslib/<%= pkg.config.grunt.utilsfolder %>'
                }]
            },
            allplugins:{
                files: [{
                    expand: true,
                    cwd: 'pub/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>',
                    src: '**/*.css',
                    dest: 'pub/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>'
                }]
            },
            allcss: {
                files: [{
                    expand: true,
                    cwd: 'source/pub/csslib/<%= pkg.config.grunt.cssfolder %>',
                    src: ['**/*.css','!mod/*.css'],
                    dest: 'pub/pub/csslib/<%= pkg.config.grunt.cssfolder %>'
                }]
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 3
            },
            allimg: {
                files: [{
                    expand: true,
                    cwd: 'source/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'pub/images'
                }]
            }
        },
        less: {
            allless: {
                files: [{
                    expand: true,
                    cwd: 'source/pub/csslib',
                    src: ['**/*.less','!mod/*.less'],
                    dest: 'source/pub/csslib',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options: {
                livereload:true
            },
            js: {
                files: ['source/jslib/**/*.js','!source/jslib/plugins/**/*.js','!source/pub/jslib/**/*.js'],
                tasks: ['jshint']
            },
            css: {
                files: ['source/pub/csslib/**/*.less'],
                tasks: ['less']
            },
            html: {
                files: ['html/**/*.html']
            //},
            //images: {
            //    files: ['source/pub/pub/images/**/*.{png,jpg,gif}'],
            //    tasks: ['imagemin']
            }
        },
        copy: {
            allutils: {
                files: [{
                    expand: true,
                    cwd: 'source/pub/jslib/<%= pkg.config.grunt.utilsfolder %>',
                    src: '**/*.*',
                    dest: 'pub/pub/jslib/<%= pkg.config.grunt.utilsfolder %>'
                }]
            },
            allplugins: {
                files: [{
                    expand: true,
                    cwd: 'source/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>',
                    src: '**/*.*',
                    dest: 'pub/jslib/plugins/<%= pkg.config.grunt.pluginsfolder %>'
                }]
            }
        }
    });
    /*加载任务
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');*/
    /*执行任务*/
    grunt.registerTask('default', function () {
        grunt.log.writeln( '请选择任务名称' );
    });
    grunt.registerTask('build', ['clean', 'transport', 'concat', 'copy', 'uglify', 'cssmin', 'clean']);
};