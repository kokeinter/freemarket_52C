// パンくずリストのリンクスタイルの変更
$(function() {
  $('a').hover(function() {
    $(this).css('textDecoration', 'underline').css('opacity', 0.7);
  }, function() {
    $(this).css('textDecoration', 'none').css('opacity', 1);
  });
});
