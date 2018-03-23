const gulp= require('gulp'),
	  sass= require('gulp-sass'),
	  uglify= require('gulp-uglify'),
	  autoprefixer= require('gulp-autoprefixer');

var source_paths = {  
    sass: './dev/sass/**/*.scss',
    js: './dev/js/**/*.js',
    routes: './dev/routes/**/*.js',
    app: './dev/app.js'
}


gulp.task('sass', ()=>
	gulp.src(source_paths.sass)
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(autoprefixer({
			browsers: ['last 5 versions']
		}))
		.pipe(gulp.dest('./public/css'))
);

gulp.task('js', ()=>
	gulp.src(source_paths.js)
		.pipe(uglify())
		.pipe(gulp.dest('./public/js'))
);

gulp.task('app', ()=>
	gulp.src(source_paths.app)
		.pipe(uglify())
		.pipe(gulp.dest('./'))
);

gulp.task('routes', ()=>
	gulp.src(source_paths.routes)
		.pipe(uglify())
		.pipe(gulp.dest('./routes'))
);

gulp.task('watch', ['sass','js','routes','app'], function() {  
  gulp.watch(source_paths.sass, ['sass'])
  gulp.watch(source_paths.js, ['js'])
  gulp.watch(source_paths.app, ['app'])
  gulp.watch(source_paths.routes, ['routes'])
});

gulp.task('default', ['watch']); 