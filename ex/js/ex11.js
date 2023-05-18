$('.s01').slick()

$('.s02').slick({
    // dots = 페이저 버튼 생성
    dots: true
})

$('.s03').slick({
    // 페이저 버튼 생성
    dots: true,
    // 자동 재생
    autoplay: true,
    // 자동 재생 간격 속도
    autoplaySpeed: 3000,
    // 자동 재생 이동 속도
    speed: 1000
})

$('.s04').slick({
    // 한번에 보여지는 카드의 개수
    slidesToShow: 3,
    // 한번에 이동하는 카드의 개수
    slidesToScroll: 2
})

$('.s05').slick({
    prevArrow: '.slideBtn .btnPrev',
    nextArrow: '.slideBtn .btnNext',
    dots: true,
    appendDots: '.slideBtn .pager'
})

// arrows 옵션     :       좌우버튼, 기본값true
// prevArrow 옵션  :       이전버튼으로 사용할 대상을 선택
// prevArrow 옵션  :       다음버튼으로 사용할 대상을 선택
// appendDots 옵션  :      선택한 태그 안쪽에 페이저 버튼 발생