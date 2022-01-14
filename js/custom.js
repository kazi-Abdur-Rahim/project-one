$(Window).scroll(function(){
    var scrolling = $(this).scrollTop()
    //scroll window bottom to top
    if(scrolling > 400){
        $('.scroll-top').fadeIn()
    }else{
        $('.scroll-top').fadeOut()
    }
    //nav fixed

    //(what can did'n work,i don't know .but i will try them)

    if(scrolling > 350){
        $('.manu-bg').addClass('fix-manu')
    }else{
    $('.manu-bg').removeClass('fix-manu')
    }
})
//click scroll top
$('.scroll-top').click(function(){
    $('html,body').animate({
        scrollTop: '0px',
    },2000);
})