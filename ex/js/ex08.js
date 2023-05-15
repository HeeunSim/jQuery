let photoBox =$('.photoBox')
let btn = $('.pager li')
let c = 0 // 화면에 출력 중인 이미지의 순서값을 저장(기준점 잡는다)


pager.on({
    click: function(){
        // 클릭한 대상의 순서값 저장
        let i = $(this).index() 
        // 현재 화면상의 이미지
        let currentImg = image.eq(c) 
        // 클릭으로 화면에 들어올 예정인  대상의 이미지
        let newImg = img.eq(i)
        /*
        변수 i와 c의 값을 비교해서 동작의 방향을 다르게 설정
        i == c : 활성화 중인 버튼을 클릭했다 >> 명령 종료
        i > c  : 활성화 중인 버튼의 오른쪽 버튼을 클릭했다 -> 위쪽에서 아래쪽으로 이동
        i < c  : 활성화 중인 버튼의 왼쪽 버튼을 클릭했다> 아래쪽에서 위쪽으로 이동
        */
       if (i==c) return false
       if (i>c){
        currentImg.stop().animate({right : '100%'})
        newImg.css({right : '-100%'}).stop().animate({right : 0})
       }
       if (i<c){
        currentImg.stop().animate({left : '-100%'})
        newImg.css({left : '100%'}).stop().animate({left : 0})
       }
       c=i
       pager.removeClass('active')
       pager.eq(i).addClass('active')
    }
})
// btn.click(function(){
//     let i = $(this).index()
//     if (i == c) return false
//     // 한줄만으로 줄여서 사용 가능! 들어간게 return일 때 위와 같이 줄여서 사용 할 수 있다
//     btn.removeClass('active')
//     $(this).addClass('active')
//     if (c < i){
//         photoBox.eq(c).stop().animate({
//             top : '100%'
//         })
//         photoBox.eq(i).css({
//             top : '-100%'
//         }).stop().animate({
//             top : 0
//         })
//     } else if ( c > i ) {
//         photoBox.eq(c).stop().animate({
//             top : '-100%'
//         })
//         photoBox.eq(i).css({
//             top : '100%'
//         }).stop().animate({
//             top : 0
//         })
//     }
    
//     c = i
// })

/** on
 * $('셀렉터').이벤트()     :    스크립트에 의해 추가되는 영역(동적인 영역)에는 이벤트 적용 안됨
 * $('셀렉터').on(이벤트)   :    스크립트에 의해 추가되는 영역(동적인 영역)에도 이벤트 정용 가능
 */