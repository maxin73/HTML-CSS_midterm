$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top;  
  $('html').animate({scrollTop: pos}, 500); 
  return false;
});