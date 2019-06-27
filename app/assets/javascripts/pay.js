$(function() {

  var number = document.querySelector('input[name="number"]'),
      cvc = document.querySelector('input[name="cvc"]'),
      exp_month = document.querySelector('select[name="exp_month"]'),
      exp_year = document.querySelector('select[name="exp_year"]')
  ;

  $('.fill').on('click', function(e) {
    e.preventDefault();
    number.value = '4242424242424242';
    cvc.value = '123';
    exp_month.value = '12';
    exp_year.value = '2019';
  });

  $('.actions-creditcards').on('click', function(e) {
    e.preventDefault();
    var card = {
      number: number.value,
      cvc: cvc.value,
      exp_month: exp_month.value,
      exp_year: exp_year.value
    }
    Payjp.setPublicKey('pk_test_0e0e759673f9685f4dd8af58');
    Payjp.createToken(card, function(s, response) {
      $("#result").append($('<input type="hidden" name="payjpToken" />').val(response.id));
      $("form").submit();
    });
  });
})