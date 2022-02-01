const { src, dest, watch } = require('gulp');

const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function compileCss() {
    return src('./*.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./'));
}

exports.watch = () => watch('*.less', compileCss);

exports.default = compileCss;
