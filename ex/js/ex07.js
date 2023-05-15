let photoBox =$('.photoBox')
let btn = $('.pager li')
let c = 0 // 화면에 출력 중인 이미지의 순서값을 저장(기준점ㅇ르 잡는다)

btn.click(function(){
    let i = $(this).index()
    if (i == c) return false
    // 한줄만으로 줄여서 사용 가능! 들어간게 return일 때 위와 같이 줄여서 사용 할 수 있다
    btn.removeClass('active')
    $(this).addClass('active')
    photoBox.eq(c).stop().animate({
        left : '-100%'
    })
    photoBox.eq(i).css({
        left: '100%'
    }).stop().animate({
        left: 0
    })
    c = i
})