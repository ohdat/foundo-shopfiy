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

  let changeProductImageByCurrentThumb = function () {
    // get current product thumb index
    let currentThumbIndex = $(this).index();
    console.log('currentThumbIndex:::', currentThumbIndex);

    $(this).addClass('active').siblings().removeClass('active');

    let currentProductImage = $(this)
      .parents('.product-item')
      .find('.product-item__image .product-item__wrapper')
      .eq(currentThumbIndex);

    currentProductImage.addClass('active').siblings().removeClass('active');
  };

  let handleProductThumbTriggerEvent = function () {
    let productThumb = $(this).find('.overflowX_bo .product__thumb');
    productThumb.on('click mouseenter', changeProductImageByCurrentThumb);
  };

  // Add custom code below this line
  $(function () {
    $('.product-item.grid-item').on('mouseenter', handleProductThumbTriggerEvent);
  });

  // The menu adds a white background to the header
  $(".menu__item").hover(function () {
    console.log($("#headerSections .menu__item span"));

    $("#headerSections .menu__item span").style?.color = "#9B9B9B";
    if ($(this).find(".header__dropdown").length) {
      $(".header__desktop__upper").css("background-color", "white");
    }
  }, function () {
    $(".header__desktop__upper").css("background-color", "");
  });
})();
