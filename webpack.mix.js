const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .styles([
    'resources/css/bootstrap-reboot.min.css'
    ], 'public/css/bootstrap-reboot.min.css')
    .sass(
        'resources/scss/site.scss',
    'public/css')
    .sass(
        'resources/scss/blogpost.scss',
    'public/css');

mix.js([
    'resources/js/nav.js'
    ], 'public/js');

mix.copyDirectory('resources/images', 'public/images');

mix.browserSync('127.0.0.1:8000');
