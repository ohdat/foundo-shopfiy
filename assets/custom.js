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
    $(this).find(".navlink--toplevel .navtext").css("color", "");
    $(".menu__item:not(:hover) .navlink--toplevel .navtext").css("color", "#9B9B9B");

    if ($(this).find(".header__dropdown").length) {
      $(".header__desktop__upper").css("background-color", "white");
    }
  }, function () {
    $(this).find(".navlink--toplevel .navtext").css("color", "");
    $(".menu__item:not(:hover) .navlink--toplevel .navtext").css("color", "");

    $(".header__desktop__upper").css("background-color", "");
  });

  $("#continue-shopping").click(function () {
    $("#cart-drawer").removeClass("is-open");
  });

  $(".header__desktop__bar__r .header__desktop__buttons .header__desktop__button:has(.navlink--cart)").click(function () {
    $("#cart-drawer").addClass("is-open");
  });

  var gallery = new PhotoSwipe('.my-gallery', PhotoSwipeUI_Default, {
    // 设置默认放大选项
    index: 0, // 默认显示第一张图片
    getThumbBoundsFn: function(index) {
      var thumbnail = document.querySelectorAll('.my-gallery img')[index];
      var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      var rect = thumbnail.getBoundingClientRect();
      return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
    }
  });
  
  // 打开图片浏览器
  gallery.init();
})();
