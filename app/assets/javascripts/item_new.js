$(function(){
  function appendSecondSelectBox(){
    var html = `
                <div class=".container__contents__details__right__form__secondgenre">
                  <select class="item_second_genre_id" id="item_second_genre_id" name="item[category]">
                    <option value="">---</option>
                  </select>
                </div>`
    return html
  }

  function appendOptionChild(child){
    var html = `<option value="${child.id}">
                  ${child.name}
                </option>`
    return html
  }

  function appendThirdSelectBox(){
    var html = `
                <div class=".container__contents__details__right__form__thirdgenre">
                  <select class="item_third_genre_id" id="item_third_genre_id" name="item[category]">
                    <option value="">---</option>
                  </select>
                </div>`
    return html
  }

  function appendOptionGrandChild(grandchild){
    var html = `<option value="${grandchild.id}">
                  ${grandchild.name}
                </option>`
    return html
  }
  function appendcost(price,cost){
            if (299 < price && price < 10000000) {
              var html = `<div class="jq-cost">${cost}</div>`
              $('.jq-cost').html(html);
            } else {
              var html = `<div class="jq-cost"> -- </div>`
              $('.jq-cost').html(html);
            }
  }
  function appendprofit(price,profit){
            if (299 < price && price < 10000000) {
              var html = `<div class="jq-profit">${profit}</div>`
              $('.jq-profit').html(html);
            } else {
              var html = `<div class="jq-profit">--</div>`
              $('.jq-profit').html(html);
            }
  }

  // セカンドジャンルの追加
  $("#item_first_genre_id").on("change",function(){

    // ファーストジャンルのidを取得してそのidをAjax通信でコントローラーへ送る
    var parentValue = document.getElementById("item_first_genre_id").value;

    // 選択したのがprompt（　"---" ）でセカンドジャンルがあれば、削除する
    // なければ非同期通信を実行する
    if(parentValue == ""){
      $('#item_second_genre_id').remove();
      $('#item_third_genre_id').remove();
    }

    else{
      var url = '/categories'
      $.ajax({
        url: url,
        type: "GET",
        data: {
          parent_id: parentValue
          // 親ボックスの値をparent_idという変数にする。
        },
        dataType: 'json'
      })
      
      .done(function(children){
        // すでにセカンドジャンルがあれば削除
        $('#item_second_genre_id').remove();
        // セレクトボックスの箱のみをまず追加
        var selectbox = appendSecondSelectBox(children);
        $('.container__contents__details__right__form__genre').append(selectbox);
        // セレクトボックスの選択しを追加
        children.forEach(function(child){
          var options = appendOptionChild(child);
          $('#item_second_genre_id').append(options);
        });
      })
      .fail(function(){
        alert('error');
      })
    }
  })
// ーーーーーーーーーここまでセカンドジャンルーーーーーーーーーー

// サードジャンルの追加
// ajaxで追加したDOM要素はセレクタが変わり、追加した要素の親要素をセレクタにして、onの中で本来セレクタにしたい要素を指定する
  $(".container__contents__details__right__form__genre").on("change","#item_second_genre_id",function(){

    // セカンドジャンルのidを取得
    var parentValue = document.getElementById("item_second_genre_id").value;

    // 選択したのがprompt（　"---" ）で、かつサードジャンルがあれば、削除する
    // なければ非同期通信を実行する
    if(parentValue == ""){
      $('#item_third_genre_id').remove();
    }
    else{
      // var url = '/categories'
      $.ajax({
        url: '/categories/show',
        type: "GET",
        data: {
          child_id: parentValue
          // 親ボックスの値をparent_idという変数にする。
        },
        dataType: 'json'
      })
            
      .done(function(grandchildren){

        // すでにサードジャンルがあれば削除
          $('#item_third_genre_id').remove();

        // セレクトボックスの箱のみをまず追加
        var selectbox = appendThirdSelectBox(grandchildren);


        $('.container__contents__details__right__form__genre').append(selectbox);
        // セレクトボックスの選択しを追加
        grandchildren.forEach(function(child){
          var options = appendOptionGrandChild(child);
          $('#item_third_genre_id').append(options);
        });
      })
      .fail(function(){
        alert('error');
      })
    }




  })

  //利益計算
  $("#item_price").on("keyup", function() {
  var price = $(this).val();
  var cost = price/10
  cost = Math.floor(cost) 
  var profit = price - cost
  appendcost(price,cost)
  appendprofit(price,profit)
  })
})
