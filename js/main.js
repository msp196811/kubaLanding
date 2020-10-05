$(function(){
    $('.menu__btn').on("click", function(){
        $('.menu__list').slideToggle();
    });
    
    $('.photo__slider').slick({
        slidesToShow: 1,
    });
});
