$(document).ready(function(){

    new WOW().init();

    $('.mainSlider').slick({
        dots: false,
        autoplaySpeed:2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.trCard__Iban').scrollTop(150);

    $('.js-menuOpen').click(function (e) {
        e.preventDefault();
        $('.header__inner').addClass('header__inner-open');
    });

    $('.js-menuClose').click(function (e) {
        e.preventDefault();
        if ($(e.target).is('.js-menuClose')){
            $('.header__inner').removeClass('header__inner-open');
        }
    });

    $(document).on('scroll',function(){
        scroolBtn('.toTop');

        windowSize();
    });

    scroolBtn('.toTop');

    $('.toTop').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    $('.js-cookiePop').on('click', function (e) {
        e.preventDefault();
        $('.cookiePop').fadeOut();
    });

});

$(window).on('load resize',windowSize);

function windowSize(){
    if ($(window).width() > '992'){
        var top2 = $(this).scrollTop();
        if (top2 < 300){
            var scrollWal = top2/4;
            $('.sectionMain__macbookImg').css({'transform':'translateY(' + scrollWal + 'px)'});
        }
        var offset = $('.sectionPayment__figure').offset().top;
        if (top2 > offset - 200 && top2 < offset + 300){

            var scrollWal2 = (top2-offset)/4;
            $('.sectionPayment__figure').css({'transform':'translateY(' + scrollWal2 + 'px)'});
        }
    }
}

function scroolBtn(btn){
    var top = $(document).scrollTop();

    if (top > 300) {
        $(btn).fadeIn(500);
    }
    else {
        $(btn).fadeOut(500);
    }
}