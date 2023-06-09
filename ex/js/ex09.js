let s = 2;
let photo = $('.sImgBox')
let pager = $('.sPager ul li')
let btnPrev = $('.sPrev')
let btnNext = $('.sNext')
let all = photo.size()
// size() : 선택된 자료의 개수를 저장한다.

// 초기값 세팅
photo.eq(s).css({
    left: 0
})
pager.eq(s).addClass('active')

// 페이저 버튼 클릭
pager.on({
    click: function(){
        let i = $(this).index()
        pager.removeClass('active')
        $(this).addClass('active')
        if (i > s) moveToLeft(i)
        if (i < s) moveToRight(i)
    }
})

// 좌우 버튼
btnPrev.on({
    click : function(){
        let n = s - 1
        if (n < 0) n = all - 1
        pager.eq(n).click()
    }
})
btnNext.on({
    click: function(){
        let n = s + 1
        if (n == all) n = 0
        pager.eq(n).click()
    }
})

// 함수 정의
function moveToLeft(j){
    let currentPhoto = photo.eq(s)
    let newPhoto = photo.eq(j)
    currentPhoto.stop().animate({left: '-100%'}, 1500)
    newPhoto.css({left: '100%'}).stop().animate({left: 0}, 1500)
    s = j
}

function moveToRight(j){
    let currentPhoto = photo.eq(s)
    let newPhoto = photo.eq(j)
    currentPhoto.stop().animate({left: '100%'}, 1500)
    newPhoto.css({left: '-100%'}).stop().animate({left: 0}, 1500)
    s = j
}