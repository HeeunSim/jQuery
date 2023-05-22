/* 
let 변수이름 = new Swiper('.swiper-wrapper의 부모태그',{
    옵션이름 : '값',
    옵션이름 : '값',
    옵션이름 : {
        옵션2이름 : '값',
        옵션2이름 : '값'
    }
})
*/

const slide01 = new Swiper('.slideList',{
    // 360도 회전 !
    loop : true,
    // 페이져
    pagination: {
        el : '.slideWrap .pager',
        clickable: true
    },
    // 좌우버튼
    navigation : {
        nextEl : '.slideWrap .btnR',
        prevEl : '.slideWrap .btnL'
    },
    // scroll bar는 loop:true와 함께 사용할 수 없다.
    scrollbar : {
        el : '.slideWrap .scrollBar'
    },
    // 자동재생
    autoplay : {
        // 움직이는 간격
        delay : 4000
    },
    // 슬라이드가 움직이는 속도
    speed : 1000
})

const pdList = new Swiper('.productList', {
    // 슬라이드 보여지는 개수
    slidesPerView : 2,
    // 슬라이드 양 옆에 마진(여백) 주기
    spaceBetween : 3
})