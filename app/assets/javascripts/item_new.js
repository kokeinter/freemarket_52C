$(function(){

  // 追加するセレクトボックスを作成
  // function appendSelectBox1(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox2(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox3(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox4(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox5(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox6(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox7(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox8(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox9(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox10(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox11(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox12(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
  // function appendSelectBox13(){
  //   var html = `<select name="item[second_genre_id]" id="item_second_genre_id" style="display: block;">
  //                 <option value="">---</option>
  //                 <option value="1">トップス</option>
  //                 <option value="2">靴</option>
  //               </select>`
  //   return html
  // }
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
  function appendimage(id){
            var html =`<label for="image_select" class="image_select_label" >
                      <p class="image_select_text">ドラッグアンドドロップ</p>
                      <p class="image_select_text">またはクリックをしてファイルをアップロード</p>
                      </label>
                      <input  type="file" name="item[images_attributes][${id}][image]"  id="image_select" class="image_select" style="display:none" >`
                      $("#image_list").append(html)

  }
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


  // // ページを読み込んだ時にセカンド・サードジャンルを隠しておく
  // $(document).ready( function(){
  //   $("#item_second_genre_id").css('display','none');
  //   $("#item_third_genre_id").css('display','none');
  // });

  // // セレクトボックスで値が選択されたらイベント発火
  // $("#item_first_genre_id").on('change',function(){

  //   // セレクトボックスで選択された値を取得
  //   const int = document.getElementById("item_first_genre_id").value;
  //   console.log(int)

  //   // 選択した値によって次のセレクトボックスを変更
  //   if(int == 1){
  //     console.log("OK")
  //     // $("#item_second_genre_id").css('display','block');
  //     var html = appendSelectBox1(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 2){
  //     console.log("OK")
  //     var html = appendSelectBox2(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 3){
  //     console.log("OK")
  //     var html = appendSelectBox3(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 4){
  //     console.log("OK")
  //     var html = appendSelectBox4(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 5){
  //     console.log("OK")
  //     var html = appendSelectBox5(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 6){
  //     console.log("OK")
  //     var html = appendSelectBox6(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 7){
  //     console.log("OK")
  //     var html = appendSelectBox7(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 8){
  //     console.log("OK")
  //     var html = appendSelectBox8(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 9){
  //     console.log("OK")
  //     var html = appendSelectBox9(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 10){
  //     console.log("OK")
  //     var html = appendSelectBox10(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 11){
  //     console.log("OK")
  //     var html = appendSelectBox11(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 12){
  //     console.log("OK")
  //     var html = appendSelectBox12(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }else if(int == 13){
  //     console.log("OK")
  //     var html = appendSelectBox13(int);
  //     $('.container__contents__details__right__form__secondgenre').append(html)
  //   }
  // })
  //利益計算

  var id = 0

  
//カウントアップする関数 countUp の定義
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
    var label = $(this).parent()
    var value = $(this).val()
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
    $(".input_image_"+id-1).remove()
  });
  $('#new_item_form').on('submit', function(){
    $(".completed").css("display","block");
  })
});