$(function(){
  function appendOptionGrandchild(grandchild){
    var html = `<div class ="third-item" value="${grandchild.id}">${grandchild.name}</div>`
    $(".category-third").append(html)
  }
  function appendOptionChild(child){
    var html = `<div class ="second-item" value="${child.id}">${child.name}</div>`
  $(".category-second").append(html)
  }
  
      //カテゴリから探すをhoverしたら1個目を表示させる
  $(".categories").hover(function(){
    $('.category-first').css("display","block");
      //_headerのcssでdisplay:noneと指定してる
    },function(){
      //hoverを外したら
      $('.category-first').css("display","none");

    });
 
  
    //一個目にカーソルを当てる(documentは全体の親要素)
  $(document).on({"mouseenter":function(){
    $(this).css('background-color','red')
    $(this).css('color','#fff')
    // $('.category-second').css("display","block");


  

    var parentValue = $(this).attr("value")
    var url = '/categories'
    $.ajax({
      url:url,
      type:"GET",
      data:{
        parent_id: parentValue
      },
      dataType: 'json'
    })
   

    .done(function(children){
      $(".second-item").empty()
      children.forEach(function(child){
       appendOptionChild(child);
       console.log("add")
    
   });
    })
    .fail(function(){
      alert('error');
    })
  },"mouseleave": function(){
    $(this).css('background-color','#fff')
    $(this).css('color','black')

  }},".category-item")

  $(document).on({"mouseenter":function(){
//documentはcategory全体の親要素なのでその親要素の2番目(.second-item)を指定   
    $(this).css('background-color','red')
    $(this).css('color','#fff')
    console.log("ok")
    var secondValue = $(this).attr("value")
    var url = "categories/" + secondValue
    $.ajax({
      url:url,
      type:"GET",
      data:{
        child_id: secondValue
      },
      dataType: 'json'
    })
    .done(function(grandchildren){
      console.log("ok2")
      grandchildren.forEach(function(grandchild){
        appendOptionGrandchild(grandchild);
      });
    })
    .fail(function(){
      alert('error');
    })
  },"mouseleave": function(){
    $(this).css('background-color','#fff')
    $(this).css('color','black')
  }},".second-item")
  

  //ブランドから探す
  $('.brands').hover(function(){
    $('.brands-values').css("display","block")
  },function(){
    $('.brands-values').css("display","none");
  })

  $('.brands-category-1').hover(function(){
    $('.brands-category-1').css('background-color','red')
    $('.brands-category-1').css('color','#fff')
  },function(){
    $('.brands-category-1').css('background-color','#fff')
    $('.brands-category-1').css('color','black')

  })

  $('.brands-category-2').hover(function(){
    $('.brands-category-2').css('background-color','red')
    $('.brands-category-2').css('color','#fff')

  },function(){
    $('.brands-category-2').css('background-color','#fff')
    $('.brands-category-2').css('color','black')

  })

  $('.brands-category-3').hover(function(){
    $('.brands-category-3').css('background-color','red')
    $('.brands-category-3').css('color','#fff')

  },function(){
    $('.brands-category-3').css('background-color','#fff')
    $('.brands-category-3').css('color','black')

  })

  $('.brands-category-4').hover(function(){
    $('.brands-category-4').css('background-color','red')
    $('.brands-category-4').css('color','#fff')

  },function(){
    $('.brands-category-4').css('background-color','#fff')
    $('.brands-category-4').css('color','black')

  })

  $('.brands-category-5').hover(function(){
    $('.brands-category-5').css('background-color','red')
    $('.brands-category-5').css('color','#fff')

  },function(){
    $('.brands-category-5').css('background-color','#fff')
    $('.brands-category-5').css('color','black')

  })

  $('.brands-category-6').hover(function(){
    $('.brands-category-6').css('background-color','red')
    $('.brands-category-6').css('color','#fff')

  },function(){
    $('.brands-category-6').css('background-color','#fff')
    $('.brands-category-6').css('color','black')

  })
});