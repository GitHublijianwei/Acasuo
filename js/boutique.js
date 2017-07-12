$(function(){
   var w=$(window).width();
   console.log(w)
   if(w<768){
    $('.judge').show();
   }else{
  $('.judge').eq(0).nextAll().hide();
  $(document).scroll(function(e){
    // console.log($('.container').eq(0).offset().top)
    var y=$(document).scrollTop();
    // console.log(y)
    if(y>=300){
      $('.judge').eq(1).show(2000)
    }
    if(y>=900){
      $('.judge').eq(2).fadeIn(2000)
    }
    if(y>=1450){
      $('.judge').eq(3).slideDown(2000)
    }
    if(y>=1900){
      $('.judge').eq(4).fadeIn(2000)
    }
    if(y>=2400){
      $('.judge').eq(5).show(2000)
    }
    if(y>=2900){
      $('.judge').eq(6).slideDown(2000)
    }
  })
   }

})