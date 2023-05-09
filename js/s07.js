
// 스크롤이 일어났을 때 배경색 변경하기
$('.box1').scroll(function(){
    $(this).css({
        backgroundColor : "red"
    })
})

// 스크롤 이동했을 때 배경색 변경하기
$('.box2').scroll(function(){
    let s = $(this).scrollLeft()
    if (s > 250) {
        $(this).css({
            backgroundColor : "yellow"
        })
    } else {
        $(this).css({
            backgroundColor : "lightsteelblue"
        })
    }
})

// 스크롤 이동했을 때 이미지 슬라이드 
$('.box3').scroll(function(){
    let s = $(this).scrollTop()
    if (s > 350){
        $('.b33').addClass('active')
    } else {
        $('.b33').removeClass('active')
    }
})

// 브라우저 스크롤 이벤트
// JS에서 브라우저는 window라고 표현됩니다
// offset() : 타켓이 가진 고유의 위치정보 (높낮이 등)
$(window).scroll(function(){
    let i = $(window).scrollTop()
    let b1 = $('.box1').offset().top
    let b2 = $('.box2').offset().top
    if ( i >= b2 ) {
        $('body').css({
            backgroundColor : 'green'
        })
    } else if ( i >= b1 ) {
        $('body').css({
            backgroundColor : 'blue'
        })
    } else {
        $('body').css({
            backgroundColor : '#fff'
        })
    }
})