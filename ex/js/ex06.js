// 위쪽 방향
$('.btnT').click(function(){
    $('.sideT').animate({
        top: 0
    })
})
$('.sideT .close').click(function(){
    $('.sideT').animate({
        top: '-100%'
    })
})

// 아래쪽
$('.btnB').click(function(){
    $('.sideB').animate({
        bottom: 0
    })
})
$('.sideB .close').click(function(){
    $('.sideB').animate({
        bottom: '-100%'
    })
})

// 왼쪽
$('.btnL').click(function(){
    $('.sideL').animate({
        left: 0
    })
})
$('.sideL .close').click(function(){
    $('.sideL').animate({
        left: '-100%'
    })
})

// 오른쪽
$('.btnR').click(function(){
    $('.sideR').animate({
        right: 0
    })
})