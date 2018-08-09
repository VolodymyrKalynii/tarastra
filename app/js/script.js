$(document).ready(function(){
    // function loader() {
    //     $('.loader').fadeOut();
    // }
    // setTimeout(loader, 2000);
    //

    new WOW().init();

    $('.mainSlider').slick({
        dots: false,
        autoplaySpeed:2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //
    // $('.filter__list-active').slideDown();
    //
    // $('.filter__title').click(function (e) {
    //     e.preventDefault();
    //
    //     $(this).toggleClass('filter__title-active').siblings('.filter__list').slideToggle();
    // });
    //
    // $('.js-popUpBtn').click(function (e) {
    //     e.preventDefault();
    //     $('.popUp').fadeIn();
    // });
    //
    // $('.js-popUpClose').click(function (e) {
    //     e.preventDefault();
    //     $('.popUp').fadeOut();
    // })
    //
    //
    // var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    // var tel1_pattern = /^\d+$/;
    //
    // $('.popUp__form').submit(function (e) {
    //     var error = false,
    //         mailFiled=$('#popUp__mail'),
    //         mail=$(mailFiled).val(),
    //         telField=$('#popUp__phone'),
    //         tel=$(telField).val(),
    //         inputs = $('.popUp__input'),
    //         wrongData='Поле заполнено не верно',
    //         emptyfield='Поле обязательно для заполнения';
    //
    //
    //     var prov = adr_pattern.test(mail),
    //         prov1 = tel1_pattern.test(tel);
    //
    //     for(var i = 0; i < inputs.length; i++){
    //         if(inputs[i].value === ''){
    //             $(inputs[i]).addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(emptyfield);
    //             error = true;
    //         }
    //     }
    //     if(!prov && mail!=='' ){
    //         $(mailFiled).val('').addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(wrongData);
    //         error = true;
    //     }
    //     if(!prov1 && tel!==''){
    //         $(telField).val('').addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(wrongData);
    //         error = true;
    //     }
    //     if(error){
    //         e.preventDefault();
    //     }
    // });
    //
    // $('.popUp__input').click(function (e) {
    //     $(this).removeClass('popUp__input-required').siblings('.popUp__required').fadeOut()
    // })
    //
    //
    //
    // $('.js-menuClose').click(function () {
    //     $('.mainMenu__menu').removeClass('mainMenu__menu-open');
    // })
    //
    // $('.js-sidebarToggle').click(function(e){
    //     e.preventDefault();
    //     $('.sidebar').toggleClass('sidebar-active');
    // })

    $('.trCard__Iban').scrollTop(150);

    $('.js-menuOpen').click(function (e) {
        e.preventDefault();
        $('.header__inner').addClass('header__inner-open');
    });

    $('.js-menuClose').click(function (e) {
        e.preventDefault();
        $('.header__inner').removeClass('header__inner-open');
    });

    scroolBtn('.toTop');

    $(document).on('scroll',function(){
        scroolBtn('.toTop');

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
    });

    $('.toTop').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });



});


function scroolBtn(btn){
    var top = $(document).scrollTop();

    if (top > 300) {
        $(btn).fadeIn(500);
    }
    else {
        $(btn).fadeOut(500);
    }
}