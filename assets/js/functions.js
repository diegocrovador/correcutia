$(function() {
  mobileNav();

  $("header h1").fitText(1, { minFontSize: '37px', maxFontSize: '75px' });

  teachers_carousel();
});

// mobile nav
function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

// fitText function
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };
})( jQuery );

//Teachers Carousel
function teachers_carousel() {

  $('.teacher-unit').first().addClass('active-teacher');
  $('.teacher-control').first().addClass('active-teacher');

  $('.teacher-control').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    $('.teacher-unit').removeClass('active-teacher').eq(position).addClass('active-teacher');
    $siblings.removeClass('active-teacher');
    $this.addClass('active-teacher');
  });

  $('.belt-control-next, .belt-control-prev').click(function() {
    var $this = $(this),
        curActiveTeacher = $('.teachers-belt').find('.active-teacher'),
        position = $('.teachers-belt').children().index(curActiveTeacher),
        teacherNum = $('.teacher-unit').length;

      if($this.hasClass('belt-control-next')) {
        if (position < teacherNum -1) {
          $('.active-teacher').removeClass('active-teacher').next().addClass('active-teacher');
        } else {
          $('.teacher-unit').removeClass('active-teacher').first().addClass('active-teacher');
          $('.teacher-control').removeClass('active-teacher').first().addClass('active-teacher');
        }
      } else {
        if (position === 0) {
          $('.teacher-unit').removeClass('active-teacher').last().addClass('active-teacher');
          $('.teacher-control').removeClass('active-teacher').last().addClass('active-teacher');
        } else {
          $('.active-teacher').removeClass('active-teacher').prev().addClass('active-teacher');
        }
      }
  });
}
