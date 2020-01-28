(function($, window, undefined) {
  $.fn.marqueeify = function(options) {
    var settings = $.extend(
      {
        horizontal: true,
        vertical: true,
        speed: 300, // In pixels per second
        container: $(this).parent()
      },
      options
    );

    return this.each(function() {
      var containerWidth,
        containerHeight,
        elWidth,
        elHeight,
        move,
        getSizes,
        $el = $(this);

      getSizes = function() {
        containerWidth = settings.container.outerWidth();
        containerHeight = settings.container.outerHeight();
        elWidth = $el.outerWidth();
        elHeight = $el.outerHeight();
      };

      move = {
        right: function() {
          $el.animate(
            { left: containerWidth - elWidth },
            {
              duration: (containerWidth / settings.speed) * 1000,
              queue: false,
              easing: 'linear',
              complete: function() {
                move.left();
              }
            }
          );
        },
        left: function() {
          $el.animate(
            { left: 0 },
            {
              duration: (containerWidth / settings.speed) * 1000,
              queue: false,
              easing: 'linear',
              complete: function() {
                move.right();
              }
            }
          );
        },
        down: function() {
          $el.animate(
            { top: containerHeight - elHeight },
            {
              duration: (containerHeight / settings.speed) * 1000,
              queue: false,
              easing: 'linear',
              complete: function() {
                move.up();
              }
            }
          );
        },
        up: function() {
          $el.animate(
            { top: 0 },
            {
              duration: (containerHeight / settings.speed) * 1000,
              queue: false,
              easing: 'linear',
              complete: function() {
                move.down();
              }
            }
          );
        }
      };

      getSizes();

      if (settings.horizontal) {
        move.right();
      }
      if (settings.vertical) {
        move.down();
      }

      // Make that shit responsive!
      $(window).resize(function() {
        getSizes();
      });
    });
  };
})(jQuery, window);

$(document).ready(function() {
  $('img').marqueeify({
    speed: 400
  });
});
