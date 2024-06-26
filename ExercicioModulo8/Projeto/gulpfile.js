const gulp = require("gulp");
const { series, parallel } = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_cssmin = require("gulp-cssmin");
const gulp_rename = require("gulp-rename");
const gulp_uglify = require("gulp-uglify");
const image = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const browser_sync = require("browser-sync").create();
const reload = browser_sync.reload;

/** 
import gulp from 'gulp';
import gulp_concat from 'gulp-concat';
import gulp_cssmin from 'gulp-cssmin';
import gulp_rename from 'gulp-rename';
import gulp_uglify from 'gulp-uglify';
import image from 'gulp-image';
*/

function tarefasCSS(callback) {
  //Asteriscos duplos significam qualquer subdiretorio dentro de vendor, asterisco unico significa qualquer arquivo .css
  gulp
    .src([
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./vendor/owl/css/owl.css",
      "./node_modules/font-awesome/css/font-awesome.css",
      "./vendor/jquery-ui/jquery-ui.css",
      "./src/css/style.css",
    ]) // Busca os arquivos que vai usar em uma array de paths
    .pipe(gulp_concat("styles.css")) // Unifica os arquivos o que ira diminuir o tempo de carregamento da pagina devido a ter menos chamadas.
    .pipe(gulp_cssmin())
    .pipe(gulp_rename({ suffix: ".min" })) // lib.min.css - ese argumento na verdade é um objeto com a propriedade suffix igual a .min
    .pipe(gulp.dest("./dist/css")); // Basicamente utiliza o comando gulp.dest para definir o diretorio destino, o qual é interpretado como o diretorio de produção

  return callback();
}

function tarefasJS(callback) {
  gulp
    .src([
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js",
      "./vendor/owl/js/owl.js",
      "./vendor/jquery-mask/jquery.mask.js",
      //"./vendor/jquery-ui/jquery-ui.js",
      "./src/js/custom.js",
    ]) // Busca os arquivos que vai usar em uma array de paths
    .pipe(babel({ //Por que o babel impede que o botao dark mode funcione de forma apropriada? Além dos Modais que tambem param de funcionar ao utilizar o babel
      comments: false,
      presets: ['@babel/env']
    }))
    .pipe(gulp_concat("scripts.js"))
    .pipe(gulp_uglify())
    .pipe(gulp_rename({ suffix: ".min" })) //libs.min.js
    .pipe(gulp.dest("./dist/js"));

  return callback();
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
//POC Proof of Concept
function tarefasHTML(callback) {
  gulp
    .src("./src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));

  return callback();
}

gulp.task("serve", function(){

  browser_sync.init({
    server: {
      baseDir: "./dist"
    }
  })
  gulp.watch("./src/**/*").on("change", process); // repete o processo quando alterar algo em src
  gulp.watch("./src/**/*").on("change", reload);
})

function end(callback){
  console.log("Tarefas Concluidas");
  return callback();
}

const process = parallel(tarefasHTML, tarefasJS, tarefasCSS, end);

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasImagem;

exports.default = process;
