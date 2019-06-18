
$(function() {
  $("#delete-item-btn").on("click",function() {
      $("#delete-dialog").css('display', "block");
      $(".delete-log-wrapper").css('display', "block");
    })
  $(".delete-log-wrapper,.delete-dialog-bottun-left").on("click",function() {
    $("#delete-dialog").css('display', "none");
    $(".delete-log-wrapper").css('display', "none");
  })
  $(".delete-dialog-bottun-right").on("click",function() {
    $(".delete-complete-log").css('display', "block");
  });

});
 
