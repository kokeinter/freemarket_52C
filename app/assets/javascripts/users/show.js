$(function(){
  $("#user_tel_form").validate({
    rules: {
      "user[tel]": {
        required: true
      }
    },
    messages: {
      "user[tel]": {
        required: '会員登録できません'
      },
    },
    errorPlacement: function(error, element){
      error.insertAfter(element);
    },
  });
});
