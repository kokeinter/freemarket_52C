$(function(){

  function appendSecondSelectBox(){
    var html = `
                <div class="container__contents__details__right__form__secondgenre">
                  <select class="item_second_genre_id" id="item_second_genre_id" name="item[second_genre_id]">
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
                <div class="container__contents__details__right__form__thirdgenre">
                  <select class="item_third_genre_id" id="item_third_genre_id" name="item[third_genre_id]">
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
  
// 利益表示
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

  // 

  // 画像追加
  function append_selectedimage(url,id){
    var html =`<div class="selected_image_wrapper" id="selected_image_wrapper_${id}">
                <div class="selected_image_top">
                  <img src="${url}" class="selected_image_top_inner">
                </div>
                <div class="selected_image_left">
                  編集
                </div>
                <div class="selected_image_right" id="${id}">
                  削除
                </div>
                </div>`
             $("#image_list").before(html)
}


  // セカンドジャンルの追加
  $("#item_first_genre_id").on("change",function(){

    // ファーストジャンルのidを取得してそのidをAjax通信でコントローラーへ送る
    var parentValue = document.getElementById("item_first_genre_id").value;
    console.log(parentValue)


    // 選択したのがprompt（　"---" ）でセカンドジャンルがあれば、削除する
    // なければ非同期通信を実行する
    if(parentValue == ""){
      $('#item_second_genre_id').remove();
      $('#item_third_genre_id').remove();
      $('.sizebrand').remove();
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
      $('.sizebrand').remove();
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


// サイズとブランド
// 三つ目のカテゴリーが選ばれたら表示する

function appendSizeBrand(){
  var html = `<p class="sizebrand">
                サイズ
                  <span class="note">
                    必須
                  </span>
              </p>
              <div class="container__contents__details__right__form__size sizebrand">
                <select name="item[size]" id="item_size">
                  <option value="">---</option>
                  <option value="20cm以下">20cm以下</option>
                  <option value="20.5cm">20.5cm</option>
                </select>
              </div>
              
              <p class="sizebrand">
                ブランド
                  <span class="note brand">
                    任意
                  </span>
              </p>
              <div class="container__contents__details__right__form__brand sizebrand">
                <input placeholder="例）シャネル" type="text" name="item[brand]" id="item_brand">
              </div>
              `
  return html
}


$(".container__contents__details__right__form__genre").on("change","#item_third_genre_id",function(){

  var genreValue = document.getElementById("item_third_genre_id").value;
  console.log(genreValue)
  if(genreValue == ""){
    $('.sizebrand').remove();
  }
  else{
    var size = appendSizeBrand();
    $('.container__contents__details__right__form__genre').append(size);
  }

})



// ーーーーーーーーーーーここまでサイズとブランドーーーーーーーーー
// ーーーーーーーーーここから配送方法ーーーーーーーーーー

function appendShippingStyle1(){
  var html = `
                <p>
                  配送の方法
                    <span class="note">
                      必須
                    </span>
                </p>
                <select name="item[shipping_style]" id="item_shipping_style">
                  <option value="">---</option>
                  <option value="未定">未定</option>
                  <option value="らくらくメルカリ便">らくらくメルカリ便</option>
                  <option value="ゆうメール">ゆうメール</option>
                  <option value="レターパック">レターパック</option>
                  <option value="普通郵便">普通郵便</option>
                  <option value="クロネコヤマト">クロネコヤマト</option>
                  <option value="ゆうパック">ゆうパック</option>
                  <option value="クリックポスト">クリックポスト</option>
                  <option value="ゆうパケット">ゆうパケット</option>
              </select>`
  return html
}
function appendShippingStyle2(){
  var html = `
              <p>
                配送の方法
                  <span class="note">
                    必須
                  </span>
              </p>
              <select name="item[shipping_style]" id="item_shipping_style">
                <option value="">---</option>
                <option value="未定">未定</option>
                <option value="クロネコヤマト">クロネコヤマト</option>
                <option value="ゆうパック">ゆうパック</option>
                <option value="ゆうメール">ゆうメール</option>
              </select>`
  return html
}

  $("#item_postage").on('change',function(){
    var postageValue = document.getElementById("item_postage").value;

    if(postageValue == "送料込み"){
      var html = appendShippingStyle1();
      $('.container__contents__shipping__right__postage').append(html)
    }
    else if(postageValue == "着払い"){
      var html = appendShippingStyle2();
      $('.container__contents__shipping__right__postage').append(html)
    }
    else{
      $('#item_shipping_style').remove();
      $('p').remove();
    }



  })

// -----------ここまで配送方法------------




//カウントアップする関数 countUp の定義

var id = -1

function countUp(){
  id++
  console.log(id)
}
  
  $("#item_price").on("keyup", function() {
  console.log(id)
  var price = $(this).val();
  var cost = price/10
  cost = Math.floor(cost) 
  var profit = price - cost
  appendcost(price,cost)
  appendprofit(price,profit)
  })

  $(document).ready(function() {
    var file=document.querySelector('input[class=image_select]')
    var label=$(file).parent()
    $(label).attr("class","image_select_label")
  });
  

  $(document).on("change",".image_select", function() {
    countUp()
    var label = $(this).parent()
    $(label).css("display","none")
    var reader  = new FileReader();
    var file    = document.querySelector('input[class=image_select]').files[0];
    $(this).attr("class","completed")
    reader.readAsDataURL(file)
    reader.addEventListener("load", function () {
    var url=reader.result
    append_selectedimage(url,id)
    var file=document.querySelector('input[class=image_select]')
    var label=$(file).parent()
    $(label).attr("class","image_select_label")
    }, false);

  });
  $(document).on("click",".selected_image_right", function() {
    console.log("ok!")
    var id = $(this).attr("id")
    $("#selected_image_wrapper_"+id).remove()
    $("#item_images_attributes_"+id+"_image").val("")
    var label=$("#item_images_attributes_"+id+"_image").parent()
    $(label).css("display","block")
    $(label).css("class","before_label")
  });
  $('#new_item_form').on('submit', function(){
    $(".completed").css("display","block");
  })
});
