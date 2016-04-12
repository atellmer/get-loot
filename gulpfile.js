var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	connect = require('gulp-connect');

var path = {
	root: 'client/',
	bem: function () {
		return this.root + 'bem_components/'
	},
	dist: function () {
		return this.root + 'dist/'
	}
}

//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//html
gulp.task('html', function () {
	return gulp.src(path.root + '*.html')
		.pipe(connect.reload());
});

//stylus
gulp.task('styl', function () {
	return gulp.src(path.bem() + '**/*.styl')
		.pipe(stylus({
			use: [nib()],
			compress: false
		}))
		.pipe(gulp.dest(function (file) {
			return file.base;
		}))
		.pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.bem() + '**/*.styl', ['styl']);
	gulp.watch(path.root + '*.html', ['html']);
});

gulp.task('default', ['connect', 'styl', 'html', 'watch']);