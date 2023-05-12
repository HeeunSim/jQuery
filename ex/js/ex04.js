$('.gnb .d1').mouseover(function(){
    let h = $(this).find('.sub').height()
    $('.gnb .d1 .sub').hide()
    $(this).find('.sub').show()
    $('.gnbBg').css({
        height: h
    })
    $('.gnbBg').show()
}).mouseout(function(){
    $(this).find('.sub').hide()
    $('.gnbBg').hide()
})

/* 
height()            :   셀렉터의 높이값을 저장한다. (여백을 제외하고 실제 컨텐츠가 적용되는 영역을 가리킨다.)
innerHeight()       :   내부높이 + 패딩
outerHeight()       :   내부높이 + 패딩 + 보더
outerHeight(true)   :   내부높이 + 패딩 + 보더 + 마진

width()             :   같은 느낌의 너비값을 저장한다. (여백을 제외하고 실제 컨텐츠가 적용되는 영역을 가리킨다.)
*/