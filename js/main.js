$(function() {

   var scrollMenu = $('.scrollMenu');
   scrollMenu.hide();

   $(window).scroll(function() {
      if($(this).scrollTop() > 80) {
         scrollMenu.fadeIn();
      } else {
         scrollMenu.fadeOut();
      }
   });

   $('#toggleMenu').css('display','none');
   $('#navToggle').on('click', function() {
      $('#toggleMenu').slideToggle(200);
      $(this).toggleClass('active');
   });

});
