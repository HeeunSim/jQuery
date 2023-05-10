/* 
버튼을 클릭했을 때
1. 클릭한 버튼의 순서값을 저장
2. 버튼 전체를 비활성화
3. 클릭한 버튼을 활성화
4. 사진 전체를 비활성화
5. 클릭한 버튼과 동일한 순서값을 가진 사진을 활성화
*/

$('.box .btn li').click(function(){
    let i = $(this).index()
    $('.box .btn li').removeClass('on')
    $(this).addClass('on')
    $('.box .photo li').css({
        display : 'none'
    })
    $('.box .photo li').eq(i).css({
        display : 'block'
    })
})