/**
 * Created by Sander Verkaemer on 05/10/2016.
 */

var gulp = require("gulp"),
    htmlhint =  require("gulp-htmlhint"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass');

const PATHS = {
    SCSS : {
        SRC: './dev/scss/**/*.scss',
        DEST: './styles/'
    }
};

const AUTOPREFIXOPTIONS = {
    browsers : ['last 2 versions']
};



gulp.task("default", function () { //default zorgt ervoor dat enkel gulp moet worden opgeropen in de terminal
    var sassWatcher = gulp.watch(PATHS.SCSS.SRC,['sass']);
});

gulp.task('sass', function () {
     gulp.src(PATHS.SCSS.SRC)
         .pipe(sourcemaps.init())
         .pipe(concat("main.min.css"))
         .pipe(sass().on('error', sass.logError))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(PATHS.SCSS.DEST));
});