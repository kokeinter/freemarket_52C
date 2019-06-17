$(document).ready(function(){
  $('.banner-image').slick({
    // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
  accessibility: true,
  // 自動再生。trueで自動再生される。
  autoplay: true,
  // 自動再生で切り替えをする時間
  autoplaySpeed: 3000,
  // 自動再生や左右の矢印でスライドするスピード
  speed: 400,
  // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
  pauseOnHover: true,
  // 自動再生時にドットにマウスオンで一時停止するかどうか
  pauseOnDotsHover: true,
  // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
  cssEase: 'ease',
  // 画像下のドット（ページ送り）を表示
  dots: false,
  // ドットのclass名をつける
  dotsClass: 'dot-class',
  // 切り替え時のフェードイン設定。trueでon
  fade: false,
  // 左右の次へ、前へボタンを表示するかどうか
  arrows: false,
  // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
  infinite: true,
  // 最初のスライダーの位置
  initialSlide: 0,
  // 画像の遅延表示。‘ondemand’or'progressive'
  lazyLoad: 'ondemand',
  // スライドのエリアにマウスオーバーしている間、自動再生を止めるかどうか。
  pauseOnHover: true,
  // スライドのエリアに画像がいくつ表示されるかを指定
  slidesToShow: 1,
  // 一度にスライドする数
  slidesToScroll: 1,
  // タッチスワイプに対応するかどうか
  swipe: true,
  // 縦方向へのスライド
  vertical: false,
  // 表示中の画像を中央へ
  centerMode: false,
  // 中央のpadding
  centerPadding: 0
  });
});

$(function() {
  $('.signin-btn__text').hover(function() {
    $(this).stop().animate({'color': '#FFF', 'background': '#0099e8'}, 500);
  },function() {
    $(this).stop().animate({'color': '#0099e8', 'background': '#FFF'}, 500);
  });
});

$(function() {
  $('.signin-btn__text').hover(function() {
    $(this).css({'color': '#FFF', 'background': '#0099e8'});
  },function() {
    $(this).css({'color': '#0099e8', 'background': '#FFF'});
  });
});

// カテゴリボタン、ブランドボタン、お知らせ、やることリスト、マイページの色変更
$(function() {
  $('.categories-btn, .brands-btn, .news-btn__text, .todo-list-btn__text, .mypage-btn__text, .kari__signout-btn-text')
  .hover(function() {
    $(this).css('color', '#0099e8');
  }, function() {
    $(this).css('color', '#333');
  });
});

// ピックアップカテゴリ、すべての商品表示のスタイル変更
$(function() {
  $('.items-contents__title-btn, .pickup-content__all-btn').hover(function() {
    $(this).css({'textDecoration': 'underline', 'opacity': 0.7});
  }, function() {
    $(this).css({'textDecoration': 'none', 'opacity': 1});
  });
});

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
