$(window).resize(function(){
    b1BColor()
})
function b1BColor(){
    let i = $(window).width()
    if( i >= 1000 ){
        $('.box1').css({
            backgroundColor : 'red'
        })
    } else {
        $('.box1').css({
            backgroundColor : 'blue'
        })
    }
}