$(function() {
  var scroll_image = function(data){
    $(".owl-lazy-sub").css('opacity', 0.6);
    var id =$(data).attr("id")
    var pos = $("#"+id).position();
    $(data).css('opacity', 1);
    $('.item-photo_scroll').animate({
      scrollLeft: pos.left
    }, 300);
  } 
  var start=function(){
    console.log("ok!")
  }
  $('.owl-lazy-sub').hover(function() {
    var data = this
    
    timeID =setTimeout(scroll_image,300,data);
   }, function() {
    clearTimeout(timeID)
  });
  window.onload = function() {
    $(".mypage-edit-left").addClass("changed");
  };
});