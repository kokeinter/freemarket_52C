$(function(){
  $("#user_form").validate({
    rules: {
      "user[nickname]": {
        required: true,
      },
      "user[email]": {
        required: true,
        email: true
      },
      "user[password]": {
        required: true,
        rangelength: [6, 128]
      },
      "user[password_confirmation]": {
        required: true,
        equalTo: 'input[name="user[password]"]'
      },
      "user[first_name]": {
        required: true
      },
      "user[last_name]": {
        required: true
      },
      "user[kana_first_name]": {
        required: true
      },
      "user[kana_last_name]": {
        required: true
      },
      groups: { "user[birthday_year]": {
        required: true
        },
      },
      "user[birthday_month]": {
        required: true
      },
      "user[birthday_day]": {
        required: true
      }
    },
    messages: {
      "user[nickname]": {
        required: 'ニックネームを入力してください'
      },
      "user[email]": {
        required: 'メールアドレスを入力してください', 
        email: 'フォーマットが不適切です'
      },
      "user[password]": {
        required: 'パスワード を入力してください',
        rangelength: 'パスワードは6文字以上128文字以下で入力してください'
      },
      "user[password_confirmation]": {
        required: 'パスワード (確認) を入力してください',
        equalTo: 'パスワードとパスワード (確認) が一致しません'
      },
      "user[first_name]": {
        required: '姓 を入力してください'
      },
      "user[last_name]": {
        required: '名 を入力してください'
      },
      "user[kana_first_name]": {
        required: '姓カナ を入力してください'
      },
      "user[kana_last_name]": {
        required: '名カナ を入力してください'
      },
      "user[birthday_year]": {
        required: '生年月日を入力してください'
      },
      "user[birthday_month]": {
        required: '生年月日を入力してください'
      },
      "user[birthday_day]": {
        required: '生年月日を入力してください'
      }
    },
    groups: {
      birthday: "user[birthday_year] user[birthday_month] user[birthday_day]",   
    },  
    
    errorPlacement: function(error, element){
      if
      (element.attr("name")=="user[birthday_year]" || element.attr("name")=="user[birthday_month]"  || element.attr("name")=="user[birthday_day]"){  
        error.insertAfter(".select-default-2");
      }
      else
      error.insertAfter(element);
    },
  });
});