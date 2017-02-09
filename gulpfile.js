var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var clean = require("gulp-clean");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-cssmin");
var cleanCss = require('gulp-clean-css');
var concat = require("gulp-concat");
var usemin = require("gulp-usemin");
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var rev = require('gulp-rev');




gulp.task("default",['copy'],function(){
	gulp.start("build");
});

gulp.task("server",function(){
	
	// Start a Browsersync proxy
	browserSync.init({
	    proxy: "127.0.0.1/CursoEcma6-OO-PP-Alura/client/"
	});
	gulp.watch("client/js/*/**").on("change",browserSync.reload);
	gulp.watch("client/css/*.css").on("change",browserSync.reload);
	gulp.watch("client/*.html").on("change",browserSync.reload);
});

gulp.task("clean",function(){

	return gulp.client("dist").pipe(clean());

});

gulp.task("copy",['clean'],function(){
		
	gulp.client("client/index.html").pipe(gulp.dest("dist/"));
	return;
});

gulp.task("build",function(){

	gulp.client('client/index.html')
	.pipe(usemin({
	css: [ rev ],
	html: [ function () {return htmlmin({ collapseWhitespace: true, removeComments: true});} ],
	jsAttributes : {async : true},
	js: [ uglify, rev ],
	inlinejs: [ uglify ],
	inlinecss: [ cleanCss, 'concat' ]
	}))
	.pipe(gulp.dest('dist/'));

});




















/*










gulp.task("build",['html'],function(){

	//build do index
	gulp.client("client/index.html")
	.pipe(usemin({
		css:[cssmin({inline: ['client/index.html']})],
		js:[uglify],
		html: [ htmlmin({collapseWhitespace: true, removeComments: true})]

	}))
	.pipe(gulp.dest("dist"));
	/*gulp.client("client/login.html")
	.pipe(usemin({
		css:[cssmin],
		js:[uglify],
		html: [ htmlmin({collapseWhitespace: true, removeComments: true})]

	}))
	.pipe(gulp.dest("dist"));
	//build do sistema
	gulp.client("client/98523156486816351646843513513215484.html")
	.pipe(usemin({
		css:[cssmin],
		js:[uglify],
		html: [ htmlmin({collapseWhitespace: true, removeComments: true})]




	}))
	.pipe(gulp.dest("dist"));

	//build do confirma
	gulp.client("client/confirma.html")
	.pipe(usemin({
		css:[cssmin],
		js:[uglify],
		html: [ htmlmin({collapseWhitespace: true})]




	}))
	.pipe(gulp.dest("dist"));


	//return gulp.start("versiona");


});




gulp.task('html', function() {
  return gulp.client(['client/views/cabecalho.html', 'client/views/forms/*.html', 'client/views/rodape.html'])
    .pipe(concat({ path: '98523156486816351646843513513215484.html', stat: { mode: 0666 }}))

    .pipe(gulp.dest('client/'));

});

gulp.task('limpa',['versiona'], function() {
	gulp.client("client/98523156486816351646843513513215484.html").pipe(clean());
	gulp.client("dist/js/sys_app.js").pipe(clean());
	gulp.client("dist/css/sys_app.css").pipe(clean());
	gulp.client("dist/js/index.js").pipe(clean());
	gulp.client("dist/css/index.css").pipe(clean());
	gulp.client("dist/relatorios/*.pdf").pipe(clean());

});





gulp.task('versiona', function(){
	var timestamp = new Date().getTime();
	var versaoApp = 'sys_app'+timestamp;
	var versaoIndex = 'index'+timestamp;

	//pagina index
 	gulp.client(['dist/index.html'])
	.pipe(replace('index', versaoIndex))
	.pipe(gulp.dest('dist'));

	gulp.client("dist/css/index.css")
  	.pipe(rename(versaoIndex+".css"))
  	.pipe(gulp.dest("./dist/css")); 

  	gulp.client("dist/js/index.js")
  	.pipe(rename(versaoIndex+".js"))
  	.pipe(gulp.dest("./dist/js")); 




	//pagina app
 	gulp.client(['dist/98523156486816351646843513513215484.html'])
	.pipe(replace('sys_app', versaoApp))
	.pipe(gulp.dest('dist'));

	gulp.client("dist/css/sys_app.css")
  	.pipe(rename(versaoApp+".css"))
  	.pipe(gulp.dest("./dist/css")); 

  	gulp.client("dist/js/sys_app.js")
  	.pipe(rename(versaoApp+".js"))
  	.pipe(gulp.dest("./dist/js")); 
});

*/