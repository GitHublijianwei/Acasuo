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
      $('.judge').eq(0).slideDown(1000)
    }
    if(y>=400){
      $('.judge').eq(1).fadeIn(1000)
    }
    if(y>=1000){
      $('.judge').eq(2).fadeIn(5000)
    }
    if(y>=1800){
      $('.judge').eq(3).slideDown(1000)
    }
  })
}
})