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

  document.addEventListener('DOMContentLoaded', function () {
    console.log($('.pasp__img[style*="display: block"]'));

    
})
  $(document).ready(function() {

    // 监听获取行内样式为block的class为pasp__img的元素
    $('.pasp__img[style*="display: block"]').on('click', function() {
      console.log(111);
      // 获取元素的中心点位置
      var element = $(this);
      var offset = element.offset();
      var centerX = offset.left + element.outerWidth() / 2;
      var centerY = offset.top + element.outerHeight() / 2;
  
      // 模拟点击事件
      var event = new MouseEvent('click', {
        clientX: centerX,
        clientY: centerY
      });
      element[0].dispatchEvent(event);
    });
  });
  
})();
