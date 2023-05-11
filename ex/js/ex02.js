// // 애니메이션 없는 동작
// $('.gnb').mouseover(function(){
//     $(this).css({
//         height : 420
//     })
//     $('.gnbBg').show()
// }).mouseout(function(){
//     $(this).css({
//         height : 40
//     })
//     $('.gnbBg').hide()
// })

// 애니메이션 있는 동작
$('.gnb').mouseover(function(){
    $(this).stop().animate({
        height : 420
    })
    $('.gnbBg').stop().slideDown()
}).mouseout(function(){
    $(this).stop().animate({
        height: 40
    })
    $('.gnbBg').stop().slideUp()
})

// 2023-05-11 숙제 : css로 구현하기