const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_cssmin = require("gulp-cssmin");
const gulp_rename = require("gulp-rename");
const gulp_uglify = require("gulp-uglify");
/** 
import gulp from 'gulp';
import gulp_concat from 'gulp-concat';
import gulp_cssmin from 'gulp-cssmin';
import gulp_rename from 'gulp-rename';
import gulp_uglify from 'gulp-uglify';
*/

function tarefasCSS(cb) {
  //Asteriscos duplos significam qualquer subdiretorio dentro de vendor, asterisco unico significa qualquer arquivo .css
  return gulp
    .src("./vendor/**/*.css") // Busca os arquivos que vai usar
    .pipe(gulp_concat("libs.css"))
    .pipe(gulp_cssmin())
    .pipe(gulp_rename({ suffix: ".min" })) // lib.min.css
    .pipe(gulp.dest("./dist/css")); // Basicamente utiliza o comando gulp.dest para definir o diretorio destino, o qual é interpretado como o diretorio de produção
}

function tarefasJS() {
  return gulp
    .src("./vendor/**/*.js")
    .pipe(gulp_concat("libs.js"))
    .pipe(gulp_uglify())
    .pipe(gulp_rename({ suffix: ".min" })) //libs.min.js
    .pipe(gulp.dest("./dist/js"));
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
