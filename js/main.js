$(function() {
   $("#toggleMenu").css("display","none");
   $("#navToggle").on("click", function() {
      $("#toggleMenu").slideToggle(200);
      $(this).toggleClass("active");
   });
});
