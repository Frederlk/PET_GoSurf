//main-slider
//========================================================================================================================================================
$(".main-content__slider").slick({
    infinite: false,
    nextArrow: $(".page__main .navigation__item_next"),
    prevArrow: $(".page__main .navigation__item_prev"),
    zIndex: 10,
    speed: 800,
    dots: true,
    touchThreshold: 10,
    appendDots: $(".main-content__pagination-top"),
    asNavFor: ".main-content__map-slider",
});
//========================================================================================================================================================

//map-slider
//========================================================================================================================================================
$(".main-content__map-slider").slick({
    infinite: false,
    fade: true,
    speed: 800,
    zIndex: 10,
    arrows: false,
    asNavFor: ".main-content__slider",
});
//========================================================================================================================================================

//surf-slider
//========================================================================================================================================================
$(".surf__main-slider").slick({
    infinite: false,
    speed: 800,
    zIndex: 10,
    focusOnSelect: true,
    nextArrow: $(".page__surf .navigation__item_next"),
    prevArrow: $(".page__surf .navigation__item_prev"),
    draggable: false,
    asNavFor: ".surf__slider",
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 479.98,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1322,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 5,
            },
        },
    ],
    mobileFirst: true,
});
//========================================================================================================================================================
//surf-slider
//========================================================================================================================================================
$(".surf__slider").slick({
    infinite: false,
    speed: 800,
    zIndex: 10,
    slidesToShow: 8,
    focusOnSelect: true,
    draggable: false,
    asNavFor: ".surf__main-slider",
    arrows: false,
});
//========================================================================================================================================================

//slide_travel
//========================================================================================================================================================
$(".travel-sleep__slider_travel").slick({
    infinite: false,
    fade: true,
    draggable: false,
    nextArrow: $(".page__travel .navigation__item_next"),
    prevArrow: $(".page__travel .navigation__item_prev"),
    zIndex: 10,
});
//========================================================================================================================================================

//slide_sleep
//========================================================================================================================================================
$(".travel-sleep__slider_sleep").slick({
    infinite: false,
    fade: true,
    draggable: false,
    nextArrow: $(".page__sleep .navigation__item_next"),
    prevArrow: $(".page__sleep .navigation__item_prev"),
    zIndex: 10,
});
//========================================================================================================================================================

//slide_shop
//========================================================================================================================================================
$(".slider-shop").slick({
    infinite: false,
    fade: true,
    draggable: false,
    nextArrow: $(".page__shop .navigation__item_next"),
    prevArrow: $(".page__shop .navigation__item_prev"),
    zIndex: 10,
});
//========================================================================================================================================================
