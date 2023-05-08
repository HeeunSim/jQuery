$('.box1 .bt11').click(function(){
    $('.box1 p').css({
        backgroundColor: "red"
    })
})

$('.box1 .bt12').click(function(){
    $('.box1 p').css({
        backgroundColor: "lawngreen"
    })
})

$('.box2 li').click(function(){
    $('.box2 li').removeClass('active')
    $(this).addClass('active')
})

$('.box3 a').click(function(){
    $('.box3 p').css({
        backgroundColor : "pink"
    })
    // 동작을 끝낸다고 알려주는 신호 이벤트
    return false
})

//자식 요소는 자신의 영역이라고 미인식
let x = 0
$('.box4').mouseover(function(){
    $('.count01').text(++x)
})

//자식 요소에도 자신의 영역이라고 인식
let y = 0
$('.box5').mouseenter(function(){
    $('.count02').text(++y)
})

// csr 클라이언트 사이드 랜더링
// 클라리언트 코드를 사용자 컴퓨터에서 가져와 사용할 수 있음
// 로딩 속도 매우 느림

// ssr 서버 사이드 랜더링
// 노드, 몽고링, 파이썬, 넥스트제이에스
// 만들어진 코드를 서버에 띄어줌
// 유저가 읽어들일 때 자신의 컴퓨터가 코드를 읽어들일 필요 없음
// 로딩 속도 현저히 축소 