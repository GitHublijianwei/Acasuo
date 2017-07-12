$(function(){
   var w=$(window).width();
   console.log(w)
   if(w<768){
    $('.judge').show();
   }else{
  $('.judge').hide();
  $(document).scroll(function(e){
    var y=$(document).scrollTop();
    if(y>=165){
     $('.judge').eq(0).slideDown(1000)
    }
    if(y>=165){
     $('.judge').eq(1).slideDown(1000)
    }
    if(y>=600){
      $('.judge').eq(2).show(1000)
    }
    if(y>=1100){
      $('.judge').eq(3).slideDown(1000)
    }
    if(y>=1500){
      $('.judge').eq(4).fadeIn(1000)
    }
    if(y>=1800){
      $('.judge').eq(5).fadeIn(1000)
    }
    if(y>=2500){
      $('.judge').eq(6).slideDown(1000)
    }
    if(y>=3100){
      $('.judge').eq(7).slideDown(1000)
    }


        

      // $.ajax({
      //         'url':'js/img.json',
      //         'type':'post',
      //         'data':{'number':$('.num').val()},
      //         success:function(res,status,xhr){
      //           console.log(1);
      //           $.each(res.shop,function(index,value){
      //             console.log(index)
      //             $.each(value,function(i,v){
      //               // console.log(v)
                    
      //               if(index==0){
      //                 $('.'+i).html(v)
      //               }else{
      //                 $('.'+i+'2').html(v)
      //               }
      //             })
      //           })

      //         }
      //       });
  })
}
})