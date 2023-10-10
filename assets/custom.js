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

  // // Hidden by default chat-button
  // let timeFlag = false;
  // let timer = setInterval(() => {
  //   let chatElement = $('.button-position--bottom_right');
  //   let elementNodes = chatElement.prevObject[0].body.childNodes;
  //   for (let i = 0; i < elementNodes.length; i++) {
  //     const node = elementNodes[i];
  //     if (node.id === 'dummy-chat-button-iframe') {
  //       node.style.display = 'none'; // hide the iframe
  //       timeFlag = true;
  //       // node.style.display = 'block'; // show the iframe
  //       break;
  //     }

  //     if (timeFlag) {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, 1000);

  document.addEventListener('DOMContentLoaded', function () {
    // 隐藏 Shopify Chat 按钮
    $('#dummy-chat-button-iframe').style.display = 'none';

    // 添加文本元素
    var textElement = document.createElement('div');
    textElement.innerHTML = '点击这里开始聊天';
    textElement.style.cursor = 'pointer';
    textElement.style.position = 'fixed';
    textElement.style.bottom = '20px';
    textElement.style.right = '20px';
    textElement.addEventListener('click', function () {
      // 显示 Shopify Chat 按钮
      $('#dummy-chat-button-iframe').style.display = 'block';
      // 隐藏文本元素
      textElement.style.display = 'none';
    });

    // 将文本元素添加到页面中
    document.body.appendChild(textElement);
  });
})();
