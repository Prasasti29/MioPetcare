var slider = $('.js-slider').isystkSlider({
    // options here
});

var slider = $('.js-slider').isystkSlider({
    'prevBtnKey': $(this).find('.prev-btn'),
    'nextBtnKey': $(this).find('.next-btn'),
    'slideCallBack': function(data) {
      slider.find('.paging li').removeClass('active');
      slider.find('.paging li:eq('+(data.pageNo-1)+')').addClass('active');
    }
});

slider.find('.paging li').click(function(e) {
  e.preventDefault();
  slider.changePage($(this).data('pageno'), $.fn.isystkSlider.ANIMATE_TYPE.SLIDE);
});
if (0 < self.find('.prev-btn').length) {
  self.find('.view-layer').css({
    'margin-left': '36px'
  });
}

var slider = $('.js-slider').isystkSlider({

    // parent container
    'parentKey': 'ul', 

    // child element
    'childKey': 'li',
    
    // the number of slides to show per page
    'shift': 1, 

    // the number of image to slide at a time
    'dispCount': null,

    // width to slide
    'shiftw': null,
    
    // or ANIMATE_TYPE.FADE
    'animateType': ANIMATE_TYPE.SLIDE,

    // animation speed
    'slideSpeed': 300,

    // infinite rotating
    'carousel': false,

    // prev/next buttons
    'prevBtnKey': '.prev-btn', 
    'nextBtnKey': '.next-btn',

    // autoplay options
    'autoSlide': false,
    'autoSlideInterval': 5000, 
    'hoverPause': false, 

    // enables touch swipe
    'isMouseDrag': false, 

    // width of rebound when swiping
    'reboundw': 50,

    // enables momentum scrolling on touch screens.
    'moment': false,

    // displays images in fullscreen mode
    'isFullScreen': false,

    // space between elements
    'margin': 0, 

    // auto adapts the image to the screen height
    'heightMaxScreen': false, 

    // callback functions
    'slideCallBack': null, 
    'resizeCallBack': null
    
});



