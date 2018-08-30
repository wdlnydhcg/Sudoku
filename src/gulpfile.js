const gulp = require("gulp");

const webpack = require("webpack-stream");
const config = require("./webpack.config.js");  //webpack的配置文件
//转译javascript
gulp.task("webpack",()=>{
    gulp.src("./js/**/*.js").pipe(webpack(config)).pipe(gulp.dest("../www/js"));      //结果放在此处
})


//编译less -> css
gulp.task("less",()=>{
    const less = require("gulp-less");
    gulp.src("./less/*.less")        //源文件路径
        .pipe(webpack())            //输送到
        .pipe(gulp.dest("../www/css"));      //结果放在此处
})

gulp.task("default",["webpack","less"]);