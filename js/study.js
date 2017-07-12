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
    if(y>=400){
      $('.judge').eq(1).fadeIn(1500)
    }
    if(y>=1300){
      $('.judge').eq(2).slideDown(3000)
    }
  })
}
})