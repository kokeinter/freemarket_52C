$(function(){
  $("#charge-form").validate({
    rules: {
      "number": {
        required: true,
        maxlength: 16,
        minlength: 13
      },
      "exp_year": {
        required: true
      },
      "exp_month": {
        required: true
      },
      "cvc": {
        required: true,
        maxlength: 4,
        minlength: 3
      }
    },
    messages: {
      "number": {
        required: 'カード番号を入力してください',
        maxlength: '有効なカード番号を入力してください',
        minlength: '有効なカード番号を入力してください'
      },
      "exp_year": {
        required: '有効期限 年を入力して下さい'
      },
      "exp_month": {
        required: '有効期限 月を入力して下さい'
      },
      "cvc": {
        required: 'セキュリティコードを入力して下さい',
        maxlength: '有効なセキュリティコードを入力してください',
        minlength: '有効なセキュリティコードを入力してください'
      }
    },
    groups: {
      exp: "exp_year exp_month"
    },
    errorPlacement: function(error, element){
      if
      (element.attr("name")=="exp_year" || element.attr("name")=="exp_month"){  
        error.insertAfter(".credit-error");
      }
      else
      error.insertAfter(element);
    },
  });
});
