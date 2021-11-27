const mix = require('laravel-mix');

mix.sass('resources/sass/app.scss', 'public/css').options({ autoprefixer: false, processCssUrls: false })
   .js('resources/js/app.js', 'public/js')
   .sourceMaps()
   .browserSync({
      proxy: 'http://localhost/arcenciel/'
   });