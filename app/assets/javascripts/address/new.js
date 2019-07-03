$(function(){
  var methods = {
    postal: function(value, element){
      return this.optional(element) || /^[0-9]{3}-?[0-9]{4}$/.test(value);
    },
  };
  $.each(methods, function(key){
    $.validator.addMethod(key, this);
  });

  $("#user_address_form").validate({
    rules: {
      "address[first_name]": {
        required: true
      },
      "address[last_name]": {
        required: true
      },
      "address[kana_first_name]": {
        required: true
      },
      "address[kana_last_name]": {
        required: true
      },
      "address[post_id]": {
        required: true,
        postal: 'postal'
      },
      "address[prefecture]": {
        required: true
      },
      "address[city]": {
        required: true
      },
      "address[address]": {
        required: true
      }
    },
    messages: {
      "address[first_name]": {
        required:  '姓 を入力してください',
      },
      "address[last_name]": {
        required:  '名 を入力してください',
      },
      "address[kana_first_name]": {
        required:  '姓カナ を入力してください',
      },
      "address[kana_last_name]": {
        required:  '名カナ を入力してください',
      },
      "address[post_id]": {
        required: '郵便番号を入力して下さい',
        postal: '郵便番号の形式で入力して下さい',
      },
      "address[prefecture]": {
        required: '都道府県を入力して下さい',
      },
      "address[city]": {
        required: '市町村を入力して下さい',
      },
      "address[address]": {
        required: '番地を入力して下さい',
      }
    },
    
    errorPlacement: function(error, element){
      error.insertAfter(element);
    },
  });
});