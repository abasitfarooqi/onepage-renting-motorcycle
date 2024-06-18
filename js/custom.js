 // Testimonial Carousel
 $(document).ready(function() {
    $('#testimonialCarousel').carousel({
        interval: 2000 // Change the interval between slides (in milliseconds)
    });
});

AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true, // Only once animation on scroll
    easing: 'ease-in-out', // Easing function for animation
});

  // Change navbar background color on scroll
  $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });