$(document).foundation()



$(document).ready(function () {
  function pageInIframe() {
    var result = false;
    try {
      if (parentIFrame) result = true;
    } catch(e) {
      result = false;
    }
    return result;
  }

  function smallWidth() {
    result = $(window).width() < 992;
    return result;
  }

  function calculateScrollPosition() {
    var result = $('#price_t').position().top;
    // if (smallWidth()) result -= 150;
    return result;
  }

  function scrollToTab() {
    var child = pageInIframe();
    var scrollPosition = calculateScrollPosition();
    if (child) {
      parentIFrame.scrollToOffset(0, scrollPosition);
    } else {
      scrollTo(0, scrollPosition);
    }
  }

  $('.orgbutton').on('click', function() {
    setTimeout(function() {
      scrollToTab();
    }, 250);
  });
});
