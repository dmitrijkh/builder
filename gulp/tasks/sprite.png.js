'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = '';

    spriteData = $.gulp.src('./source/sprite/png/*.png')
      .pipe($.spritesmith({
        //retinaSrcFilter: './source/sprite/png/*@2x.png',
        imgName: '../img/png_sprite.png',
        //retinaImgName: '../img/sprite@2x.png',
        cssName: 'png_sprite.scss',
        algorithm: 'left-right',
          padding: 20
      }));
    var imgStream = spriteData.img.pipe($.gulp.dest($.config.root + './source/imgages'));
    var cssStream = spriteData.css.pipe($.gulp.dest('./source/style/common'));

    return (imgStream, cssStream);
  });
};