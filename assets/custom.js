/*
 * Broadcast Theme
 *
 * Use this file to add custom Javascript to Broadcast.  Keeping your custom
 * Javascript in this fill will make it easier to update Broadcast. In order
 * to use this file you will need to open layout/theme.liquid and uncomment
 * the custom.js script import line near the bottom of the file.
 */

(function () {
  let $ = jQuery;

  let handleProductThumbClick = function () {
    let productThumb = $('.overflowX_bo .product__thumb');

    //  add click event to product thumb and change product image
    productThumb.on('click', function () {
      // get current product thumb index
      let currentThumbIndex = $(this).index();

      // add active class to current thumb and remove from other thumbs
      $(this).addClass('active').siblings().removeClass('active');

      // get current product image by index
      let currentProductImage = $(this)
        .closest('.overflowX_bo')
        .prev('.product-item__image')
        .find('.product-item__wrapper')
        .eq(currentThumbIndex);

      // toggle active class on current product image and remove from other images
      currentProductImage.addClass('active').siblings().removeClass('active');
    });
  };

  // Add custom code below this line
  $(function () {
    handleProductThumbClick();
  });
})();
