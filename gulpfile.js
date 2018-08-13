var gulp=require('gulp'),
    scss=require('gulp-sass'),
    browserSync=require('browser-sync'),
    cssnano=require('gulp-cssnano'),
    rename=require('gulp-rename'),
    del=require('del'),
    autoprefixer=require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(scss().on( 'error', function( error )
		{
		  console.log( error );
		} ))
        .pipe(gcmq())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        // .pipe(sourcemaps.init())
        // .pipe(cssnano())
        // .pipe(rename({suffix: '.min'}))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/index.html')
});

gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('build', ['clean', 'sass'], function() {
    var buildCss = gulp.src(['app/css/*','app/css/*/*'])
        .pipe(gulp.dest('dist/css'));
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    var buildHtmlInf = gulp.src('app/article/*.html')
        .pipe(gulp.dest('dist/article'));
    var buildJs = gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'));
    var buildImg = gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images'));
    var buildSvg = gulp.src('app/images/svg/*.*')
        .pipe(gulp.dest('dist/images/svg'));
    var buildFonts = gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});