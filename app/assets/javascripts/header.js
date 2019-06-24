// ログインボタンのアニメーション
$(function() {
  $('.signin-btn__text').hover(function() {
    $(this).stop().animate({'color': '#FFF', 'backgroundColor': '#0099e8'}, 300);
  },function() {
    $(this).stop().animate({'color': '#0099e8', 'backgroundColor': '#FFF'}, 300);
  });
});

// カテゴリボタン、ブランドボタン、いいね！一覧、お知らせ、やることリスト、マイページの色変更
$(function() {
  $('.categories-link-btn, .brands-link-btn, .like-btn__header-like-icon, .like-btn__text, .news-btn__icon, .news-btn__text, .todo-list__btn-icon, .todo-list__btn-text, .mypage-btn__text')
  .hover(function() {
    $(this).css('color', '#0099e8');
  }, function() {
    $(this).css('color', '#333');
  });
});

// いいね！一覧アイコン、お知らせアイコン、やることリストアイコン
$(function() {
  $('.like-btn__header-like-icon, .news-btn__icon, .todo-list__btn-icon')
  .hover(function() {
    $(this).css('color', '#0099e8');
  }, function() {
    $(this).css('color', '#a9a9a9');
  });
});
