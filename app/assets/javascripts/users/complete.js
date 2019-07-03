$(function() {
  $('.aaa').hover(function() {
    $(this).css('background', '#FFFFFF').css('opacity', 0.7);
  }, function() {
    $(this).css('background', '').css('opacity', 1);
  });
});
