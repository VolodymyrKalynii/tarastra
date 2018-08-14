//Работа лоадера
$(window).on('load', function() {
    $('.loader').fadeOut('slow');
});


$(function () {
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

        var addSpan  = document.createElement('span'),
            mValue  = Math.max(this.clientWidth, this.clientHeight),
            rect    = this.getBoundingClientRect();

        addSpan.style.width  = addSpan.style.height = mValue + 'px';
        addSpan.style.left  = e.clientX - rect.left - (mValue / 2) + 'px';
        addSpan.style.top   = e.clientY - rect.top - (mValue / 2) + 'px';

        $(addSpan).addClass('btn__ripple');
        $(this).find('.btn__rippleWrapp').append(addSpan);
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
/* Анимация при скролле страницы */

$(document).on('scroll',function(){
    animateElements('.sectionMain__macbookImg');
    animateElements('.sectionCta__cardImg');
    animateElements('.sectionPayment__figure');
});

//Функция анимации картинок
function animateElements(elem) {
    if (!$(elem).length) return;

    if ($(window).width() > '992') {

        var offset = $(elem).offset().top,
            scrollTop = $(this).scrollTop(),
            scrollVal = (scrollTop - offset) / 4;

        if (scrollTop < offset + 300 && scrollTop > offset - 200 ) {
            $(elem).css({'transform':'translateY(' + scrollVal + 'px)'});
        }
    }
}

/* # Анимация при скролле страницы */
/*  Странница blog */
$(function () {

    //Переключаем активные вкладки в блоге
    $('[data-openTab]').on('click', function (e) {
        $('[data-openTab]').removeClass('blogTabs__tab-active');
        $(this).addClass('blogTabs__tab-active');
    });
});

/* # Странница blog */
/*  Странница faq */

$(function () {
    //фокус и анфокус лейбла
    var searchField = $('.faqSearch__input');
    var cleanSearchField = $('.faqSearch__clean');

    searchField.on('focus', function (e) {
        $(this).closest('.faqSearch__inner').addClass('faqSearch__inner-focus');
    });
    searchField.focusout('focus', function (e) {
        $(this).closest('.faqSearch__inner').removeClass('faqSearch__inner-focus');
    });

    // работа кнопки "очистить поле поиска"

    // проверяем есть ли что-то в поле
    searchField.on('keyup', function () {
        if (!searchField.val())
            cleanSearchField.removeClass("faqSearch__clean-visible");
        else
            cleanSearchField.addClass("faqSearch__clean-visible");
    });

    // очистка поля
    cleanSearchField.on('click', function () {
        searchField.val('');
        cleanSearchField.removeClass("faqSearch__clean-visible");
    });


    //работа табов
    $('.faqItems__panelTitle').on('click', function () {
        $(this).next().slideToggle();
        $(this).closest('.faqItems__panel').toggleClass('faqItems__panel-opened');
    });
});

// Переключение активных пунктов сайдбара при скроле
$(document).on('scroll', function () {
    onScrollFaq(".faqContent__sidebarInner");
});

// Функция переключение активных пунктов сайдбара при скроле
function onScrollFaq(selector){
    var scroll_top = $(document).scrollTop();
    $(selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top + 150 && target.position().top + target.outerHeight() > scroll_top - 50 || target.position().top >= scroll_top+100 && !$(this).closest('li').index()) {
            $(selector + " a.faqContent__sidebarLink-active").removeClass("faqContent__sidebarLink-active");
            $(this).addClass("faqContent__sidebarLink-active");
        }  else {
            $(this).removeClass("faqContent__sidebarLink-active");
        }
    });
}

/* # Странница faq */
/*  Кнопка прокрутки */

$(window).on('scroll load', function () {
    //Проверяем кнопку "наверх"
    scroolBtn('.toTop');
});

//Работа кнопки "наверх"
$('.toTop').on('click',function(){
    $('html,body').animate({
        scrollTop: 0
    },500);
});

//Функция видимости кнопки скролла
function scroolBtn(btn){
    var top = $(document).scrollTop();

    if (top > 300) {
        $(btn).fadeIn(500);
    } else {
        $(btn).fadeOut(500);
    }
}

/* # Кнопка прокрутки */