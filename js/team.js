$(function(){
   var w=$(window).width();
   console.log(w)
   if(w<768){
    $('.judge').show();
   }else{
  $('.judge').hide();
  $(document).scroll(function(e){
    // console.log($('.container').eq(0).offset().top)
    var y=$(document).scrollTop();
    // console.log(y)
    if(y>=0){
     $('.judge').eq(0).show(1000)
    }
    if(y>=500){
      $('.judge').eq(1).fadeIn(1000);
    }
    if(y>=800){
      $('.judge').eq(2).slideDown(1500)
    }
    if(y>=1200){
      $('.judge').eq(3).fadeIn(1500)
    }
     if(y>=1600){
      $('.judge').eq(4).show(1500)
    }
  })
   }

})