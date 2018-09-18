var gulp = require('gulp');
var ejs = require('gulp-ejs');
var log = require('fancy-log');
const liveServer = require('live-server');
const Bundler = require('parcel-bundler');

const paths = {
	source: {
		js: './src/js/**/*.js',
		scss: './src/scss/**/*.scss',
		ejs: './src/views/pages/**/*.ejs',
		html: './src/compiled/**/*.html',
		vue: './src/js/**/*.vue',
	},
	watch: {
		ejs: './src/views/**/*.ejs',
	},
	dest: {
		ejs: './src/compiled',
		build: './build',
	},
};

gulp.task('watch:html', () => {
	gulp.watch(paths.source.html, ['bundle']);
});

gulp.task('watch:scss', () => {
	gulp.watch(paths.source.scss, ['bundle']);
});

gulp.task('watch:js', () => {
	gulp.watch(paths.source.js, ['bundle']);
})

gulp.task('watch:vue', () => {
	gulp.watch(paths.source.vue, ['bundle']);
});

gulp.task('ejs', function() {
	return gulp
		.src(paths.source.ejs)
		.pipe(ejs({}, { ext: '.html' }).on('error', log))
		.pipe(gulp.dest(paths.dest.ejs));
});

gulp.task('watch:ejs', () => {
	gulp.watch(paths.watch.ejs, ['ejs']);
});

gulp.task('bundle', () => {
	const bundler = new Bundler(paths.source.html, {
		watch: false,
		outDir: paths.dest.build,
	});
	bundler.bundle();
});

gulp.task('serve', () => {
	liveServer.start({
		root: paths.dest.build,
	});
})

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'watch:ejs', 'bundle', 'watch:html', 'watch:js', 'watch:scss', 'watch:vue', 'serve' /*'js', 'sass'*/], function() {

});
