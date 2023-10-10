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

  document.addEventListener('DOMContentLoaded', function () {
    let textElement = document.createElement('div');
    textElement.innerHTML = '点击这里开始聊天';
    textElement.setAttribute('id', 'live-chat-node')
    textElement.style.cursor = 'pointer';
    textElement.style.display = 'none';
    textElement.style.position = 'fixed';
    textElement.style.bottom = '20px';
    textElement.style.right = '20px';
    document.body.appendChild(textElement);
  });

  // Hidden by default chat-button
  let timeFlag = false;
  let dummyChatButtonIframeNode = null;
  let liveChatTextNode = null;
  let timer = setInterval(() => {
    let chatElement = $('.button-position--bottom_right');
    let elementNodes = chatElement.prevObject[0].body.childNodes;

    for (let i = 0; i < elementNodes.length; i++) {
      let node = elementNodes[i];
      if (node.id === 'dummy-chat-button-iframe') {
        dummyChatButtonIframeNode = node;
        timeFlag = true;
        break;
      }

      if (node.id === 'live-chat-node') {
        liveChatTextNode = node;
        liveChatTextNode.style.display = 'block';
        node.addEventListener('click', function () {
          dummyChatButtonIframeNode.style.display = 'block';
          liveChatTextNode.style.display = 'none';
        });
      }

      if (timeFlag) {
        clearTimeout(timer);
      };
    }
  }, 1000);


})();
