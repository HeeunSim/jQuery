$('.box1').css('backgroundColor', 'blue')
$('.box1').css({
    width: '50%',
    height: 300,
    margin: '0 auto',
    backgroundColor : 'green'
})

let t = $('.box2 .p21').css('display')
if(t == 'none'){
    $('.box2 .p22').css({
        border: '5px solid #000'
    })
} else {
    $('.box2 .p22').css({
        border: 0
    })
}