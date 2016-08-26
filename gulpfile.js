(function () {


    'use strict';

    var gulp = require('gulp');
    var argv = require('yargs').argv;
    var $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'del']
    });

    gulp.task('clean',function() {
        return $.del('dist');
    });

    gulp.task('copy-dir',function() {
        return gulp.src('src/**')
            .pipe($.filter([
                '**',
                '!src/*.html',
                '!src/scss',
                '!src/scss/**',
                '!src/scripts',
                '!src/scripts/**',
            ]))
            .pipe($.debug())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('copy-vendor',function() {
        return gulp.src('bower_components/**')
            .pipe(gulp.dest('dist/bower_components'));
    });

    gulp.task('copy-html',function() {
        return gulp.src('src/*.html')
            .pipe($.replace('../bower_components','bower_components'))
            .pipe($.htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist'));
    });


    //scripts
    gulp.task('scripts',function() {
        return gulp.src('src/scripts/**')
            .pipe($.uglify())
            .pipe(gulp.dest('dist/scripts'));
    });

    //scripts-watch
    gulp.task('scripts:watch', function () {
        gulp.watch('src/scripts/**', ['scripts']);
    });

    gulp.task('styles',function() {
        return gulp.src('src/scss/**')
            .pipe($.sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('src/styles'));
    });

    gulp.task('styles:watch', function () {
        gulp.watch('src/scss/**', ['styles']);
    });

    gulp.task('uplpad',function() {
        //return gulp.src('dist/**')
    });



    gulp.task('dev',['clean'],function(){
        gulp.start([
            'styles',
            'scripts',
            'styles:watch',
            'styles:watch'
        ]);
    });


    gulp.task('build',['clean'],function(){
        gulp.start([
            'scripts',
            'styles',
            'copy-dir',
            'copy-vendor',
            'copy-html'
        ]);
    });



}());
