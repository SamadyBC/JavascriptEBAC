const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_cssmin = require("gulp-cssmin");
const gulp_rename = require("gulp-rename");
const gulp_uglify = require("gulp-uglify");
const image = require("gulp-imagemin");

/** 
import gulp from 'gulp';
import gulp_concat from 'gulp-concat';
import gulp_cssmin from 'gulp-cssmin';
import gulp_rename from 'gulp-rename';
import gulp_uglify from 'gulp-uglify';
import image from 'gulp-image';
*/

function tarefasCSS(cb) {
  //Asteriscos duplos significam qualquer subdiretorio dentro de vendor, asterisco unico significa qualquer arquivo .css
  return gulp
    .src([
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./vendor/owl/css/owl.css",
      "./node_modules/font-awesome/css/font-awesome.css",
      "./vendor/jquery-ui/jquery-ui.css",
      "./src/css/style.css",
    ]) // Busca os arquivos que vai usar em uma array de paths
    .pipe(gulp_concat("styles.css"))
    .pipe(gulp_cssmin())
    .pipe(gulp_rename({ suffix: ".min" })) // lib.min.css
    .pipe(gulp.dest("./dist/css")); // Basicamente utiliza o comando gulp.dest para definir o diretorio destino, o qual é interpretado como o diretorio de produção
}

function tarefasJS() {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js",
      "./vendor/owl/js/owl.js",
      "./vendor/jquery-mask/jquery.mask.js",
      "./vendor/jquery-ui/jquery-ui.js",
      "./src/js/custom.js",
    ]) // Busca os arquivos que vai usar em uma array de paths
    .pipe(gulp_concat("scripts.js"))
    .pipe(gulp_uglify())
    .pipe(gulp_rename({ suffix: ".min" })) //libs.min.js
    .pipe(gulp.dest("./dist/js"));
}

function tarefasImagem() {
  return gulp
    .src("./src/images/*")
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true,
      })
    )
    .pipe(gulp.dest("./dist/images"));
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasImagem;
