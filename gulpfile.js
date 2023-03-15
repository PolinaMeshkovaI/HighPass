const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixes = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require("gulp-image");
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const del = require('del');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
        .pipe(dest('dist'))
}

const images = () => {
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.png',
        'src/images/**/*.jpeg',
        'src/images/*.svg',
    ])
        .pipe(image())
        .pipe(dest('dist/images'))
}

const fonts = () => {
	src('./src/fonts/**.ttf')
		.pipe(ttf2woff())
		.pipe(dest('dist/fonts'))
	return src('./src/fonts/**.ttf')
		.pipe(ttf2woff2())
		.pipe(dest('dist/fonts'))
}

const styles = () => {
    return src('src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
        .pipe(autoprefixes({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())
}

const stylesBuild = () => {
    return src('src/styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist/css'))
}

const htmlMinify = () => {
    return src('src/**/*.html')
      .pipe(useref())
      .pipe(
        htmlMin({
          collapseWhitespace: true,
        })
      )
      .pipe(dest('dist'))
      .pipe(browserSync.stream());
  };

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
}

// const scripts = () => {
//     return src([
//         'src/js/components/**/*.js',
//         'src/js/main.js'
//     ])
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(concat('app.js'))
//         .pipe(uglify().on('error', notify.onError()))
//         .pipe(sourcemaps.write())
//         .pipe(dest('dist'))
//         .pipe(browserSync.stream())
// }

const scriptsBuild = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(dest('dist'))
}
const scripts = () => {
	src('./src/js/vendor/**.js')
		.pipe(concat('vendor.js'))
		// .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
		.pipe(dest('dist/js/'))
  return src(
    ['./src/js/components/**.js', './src/js/main.js'])
    .pipe(sourcemaps.init())
    // .pipe(gulpif(!isProd, sourcemaps.init()))
		.pipe(babel({
			presets: ['@babel/env']
		}))
    .pipe(concat('main.js'))
    // .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
    // .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/fonts/**.ttf', fonts);
watch('src/styles/**/*.scss', styles)
watch('src/styles/**/*.scss', stylesBuild)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/js/**/*.js', scriptsBuild)
watch('src/resources/**', resources)

exports.htmlMinify = htmlMinify;
exports.styles = styles;
exports.scripts = scripts;
exports.image = image;
exports.default = series(clean, resources, htmlMinify, fonts, styles, svgSprites, images, scripts,  watchFiles);
exports.build = series(clean, resources, htmlMinify, fonts, stylesBuild, svgSprites, images, scriptsBuild,  watchFiles);