
// Работа лоадера

// Заглушка для проверки работы лоадера
function loader() {
    $('.loader').fadeOut();
}
setTimeout(loader, 000);

// $(window).on('load', function() {
//     $('.loader').fadeOut().fadeOut('slow');
// });

//# Работа лоадера



$(document).ready(function(){

    new WOW().init();

    //Запуск слайдера
    $('.mainSlider').slick({
        dots: false,
        autoplaySpeed:2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //Открытие меню на адаптиве
    $('.js-menuOpen').click(function (e) {
        e.preventDefault();
        $('html').addClass('open-mobile');
        $('.header__inner').addClass('header__inner-open');
        $('.header').append('<div class="header__overlay"></div>');
        setTimeout(function () {
            $('.header__overlay').addClass('header__overlay-displayed');
        }, 100);
    });

    //Закрытие меню на адаптиве
    $('html').on('click', '.header__overlay', function () {
        $('html').removeClass('open-mobile');
        $('.header__inner').removeClass('header__inner-open');
        $('.header__overlay').removeClass('header__overlay-displayed');
        setTimeout(function () {
            $('.header__overlay').remove();
        }, 500);
    });


    //Проверка при скролле страницы
    $(document).on('scroll',function(){
        //Проверяем кнопку "наверх"
        scroolBtn('.toTop');

        //Анимация каринок вверх-вниз
        animateElements();
    });

    //Проверяем кнопку "наверх"
    scroolBtn('.toTop');

    //Работа кнопки "наверх"
    $('.toTop').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    //Прячем попап куки
    $('.js-cookiePop').on('click', function (e) {
        e.preventDefault();
        $('.cookiePop').fadeOut();
    });

    //Волна при клике на кнопки
    $('body').on('click', '.btn', function (e) {
        event.preventDefault();

        if ($(this).find('.btn__ripple')){
            $(this).find('.btn__ripple').remove();
        }

        var addDiv  = document.createElement('span'),
            mValue  = Math.max(this.clientWidth, this.clientHeight),
            rect    = this.getBoundingClientRect(),
            sDiv    = addDiv.style,
            px      = 'px';

        sDiv.width  = sDiv.height = mValue + px;
        sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
        sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

        addDiv.classList.add('btn__ripple');
        $(this).find('.btn__rippleWrapp').append(addDiv);
    });

    //Прокрутка по якорях
    $("a[href*=\\#]").on('click', function (e) {
       e.preventDefault();

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html,body').animate({
            scrollTop: h.offset().top - 70
        },400);
    });
});

//Проверка при загрузке и ресайзе давать ли клас кнопке меню, и анимировать ли картинки
$(window).on('load resize', animateElements, toggleClassLogin);

//Функция анимации картинок
function animateElements(){
    if ($(window).width() > '992'){
        var top2 = $(this).scrollTop();
        if (top2 < 300){
            var scrollWal = top2/4;
            $('.sectionMain__macbookImg').css({'transform':'translateY(' + scrollWal + 'px)'});
            $('.sectionCta__cardImg').css({'transform':'translateY(' + scrollWal + 'px)'});
        }
        if($('*').is('.sectionPayment__figure')){
            var offset = $('.sectionPayment__figure').offset().top;
            if (top2 > offset - 200 && top2 < offset + 300){

                var scrollWal2 = (top2-offset)/4;
                $('.sectionPayment__figure').css({'transform':'translateY(' + scrollWal2 + 'px)'});
            }
        }
    }
}

//Функция добавленя/удаления класу кнопке логин
function toggleClassLogin(){
    if ($(window).width() < '992'){
        $('.header__cabBtnLogIn').addClass('btn');
    } else {
        $('.header__cabBtnLogIn').removeClass('btn');
    }
}

//Функция видимости кнопки скролла
function scroolBtn(btn){
    var top = $(document).scrollTop();

    if (top > 300) {
        $(btn).fadeIn(500);
    }
    else {
        $(btn).fadeOut(500);
    }
}