$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });

    /* Настройка select */
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrolltop: $(_href).offset().top -120 + "px"});
        return false;
    });
    $('input[type="tel"]').mask("+38 (999) 999-99-99");
    /* Показывать картутолько когда докрутил до нее */
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrolltop();
        if(windowTop > reviewsTop){
            $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.855062380433!2d29.80995771572204!3d50.462423594383104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b41206e28876d%3A0x7a3fda3084d6b36b!2z0LLRg9C70LjRhtGPINCk0YDRg9C90LfQtSwgNTIsINCc0LDQutCw0YDRltCyLCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4MDAx!5e0!3m2!1sru!2sua!4v1582202856637!5m2!1sru!2sua" width="1500" height="410" frameborder="0" style="border:0;" allowfullscreen=""></iframe>')
            $(window).unbind('scroll')
        }
    });
});