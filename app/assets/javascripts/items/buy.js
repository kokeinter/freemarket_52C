// フッターリストのスタイル変更
$(function() {
  $('.buy_inf_list').hover(function() {
    $(this).css('textDecoration', 'underline').css('opacity', 0.7);
  }, function() {
    $(this).css('textDecoration', 'none').css('opacity', 1);
  });
});

$(function() {
  $('.single-footer-logo').hover(function() {
    $(this).css('opacity', 0.7);
  }, function() {
    $(this).css('opacity', 1);
  });
});
