var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify-es').default,
		cleancss     = require('gulp-clean-css'),
		autoprefixer = require('gulp-autoprefixer'),
		rename       = require('gulp-rename'),
		del          = require('del');

// Local Server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: true,
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

// Custom Styles
gulp.task('styles', function() {
	return gulp.src('assets/scss/**/*.scss')
	.pipe(sass({
		outputStyle: 'expanded',
	}).on('error', sass.logError))
	// .pipe(concat('styles.min.css'))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(gulp.dest('assets/css/'))
	.pipe(browserSync.stream())
});

// Scripts & JS Libraries
gulp.task('scripts', function() {
	return gulp.src([
		// 'node_modules/jquery/dist/jquery.min.js', // Optional jQuery plug-in (npm i --save-dev jquery)
		// 'app/js/_libs.js', // JS libraries (all in one)
		'assets/js/_custom.js', // Custom scripts. Always at the end
		])
	// .pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Minify js (opt.)
	.pipe(rename("scripts.js"))
	.pipe(gulp.dest('assets/js/'))
	.pipe(browserSync.reload({ stream: true }))
});


// Code & Reload
gulp.task('code', function() {
	return gulp.src('*.html')
	.pipe(browserSync.reload({ stream: true }))
});


gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', gulp.parallel('styles'));
	gulp.watch(['assets/js/_custom.js'], gulp.parallel('scripts'));
	gulp.watch('*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));
