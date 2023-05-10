$('.box1').mouseover(function(){
    $('.box1 p').delay(1000).stop().fadeOut()
}).mouseout(function(){
    $('.box1 p').delay(1000).stop().fadeIn()
})