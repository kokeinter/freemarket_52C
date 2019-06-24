// バナーの各ストアのボタン色変化
$(function() {
  $('.app-banner__dl-btn-ios, .app-banner__dl-btn-google').hover(function() {
    $(this).css('background', '#FFFFFF').css('opacity', 0.2);
  }, function() {
    $(this).css('background', '').css('opacity', 0);
  });
});

// フッターリストのスタイル変更
$(function() {
  $('.footer-list').hover(function() {
    $(this).css('textDecoration', 'underline');
  }, function() {
    $(this).css('textDecoration', 'none');
  });
});

$(function() {
  $('.footer-social-link__app-icon, .footer-bottom__logo').hover(function() {
    $(this).css('opacity', 0.7);
  }, function() {
    $(this).css('opacity', 1);
  });
});
