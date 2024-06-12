import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import cache from 'gulp-cache';
import { spawn } from 'child_process';
import browserSyncPackage from 'browser-sync';

const browserSync = browserSyncPackage.create();
const sass = gulpSass(dartSass);

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

// Compile files
gulp.task('sass', function () {
    return gulp.src('assets/css/scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            onError: browserSync.notify
        }))
        .pipe(postcss([autoprefixer({ cascade: true })]))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('assets/css'));
});

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    return spawn(jekyll, ['build'], { stdio: 'inherit' })
        .on('close', done);
});

// Rebuild Jekyll and page reload
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function (done) {
    browserSync.reload();
    done();
}));

// Compression images
gulp.task('img', function() {
    return gulp.src('assets/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('_site/assets/img'))
        .pipe(browserSync.stream());
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', gulp.series('sass', 'img', 'jekyll-build', function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
}));

// Watch scss, html, img files
gulp.task('watch', function () {
    gulp.watch('assets/css/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('assets/js/**/*.js', gulp.series('jekyll-rebuild'));
    gulp.watch('assets/img/**/*', gulp.series('img'));
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_pages/*.html', '_posts/*'], gulp.series('jekyll-rebuild'));
});

// Default task
gulp.task('default', gulp.series('browser-sync', 'watch'));
