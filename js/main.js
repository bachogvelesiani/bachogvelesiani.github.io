/* SLIDE-MENU JAVASCRIPT */

$('.ham-menu').click(function(){
   $('#slide-menu').toggleClass('toggled');
   $('body').toggleClass('toggled');
    $('#dark-overlay').fadeIn(200);
});

$('.ham-menu-close').click(function(){
   $('#slide-menu').removeClass('toggled');
    $('body').removeClass('toggled');
    $('#dark-overlay').fadeOut(200);
});

$('#slide-menu, .ham-menu').clickoutside(function() {
    $('#slide-menu').removeClass('toggled');
    $('body').removeClass('toggled');
    $('#dark-overlay').fadeOut(200);
});


//typed js
    $(".typed").typed({
        strings: ["My Name is Bacho", "I'm a Web Designer", "Love Simplicity"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });


//owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],

      // CSS Styles
      baseClass : "owl-carousel",
        theme: 'owl-theme'
    });

    $('.owl-carousel2').owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      autoPlay : false,

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
