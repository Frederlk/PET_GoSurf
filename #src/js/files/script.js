
window.onload = function () {
   document.addEventListener("click", documentActions);
   // Actions (Делегирование событий Click)
   function documentActions(e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('header__search-icon')) {
         document.querySelector('.header__form').classList.toggle('_active');
      } else if (!targetElement.closest('.header__form') && document.querySelector('.header__form._active')) {
         document.querySelector('.header__form').classList.remove('_active');
      }
   };
   if ($('.main__image')) {
      var rellax = new Rellax('.main__image');
   };
   $(document).ready(function () {
      //main-slider
      //========================================================================================================================================================
      $('.main-content__slider').slick({
         infinite: false,
         nextArrow: $('.page__main .navigation__nav-item_next'),
         prevArrow: $('.page__main .navigation__nav-item_prev'),
         zIndex: 10,
         speed: 800,
         dots: true,
         touchThreshold: 10,
         appendDots: $('.main-content__pagination-top'),
         asNavFor: ".main-content__map-slider"
      });
      //========================================================================================================================================================

      //map-slider
      //========================================================================================================================================================
      $('.main-content__map-slider').slick({
         infinite: false,
         fade: true,
         speed: 800,
         zIndex: 10,
         arrows: false,
         asNavFor: ".main-content__slider"
      });
      //========================================================================================================================================================

      //surf-slider
      //========================================================================================================================================================
      $('.surf__main-slider').slick({
         infinite: false,
         speed: 800,
         zIndex: 10,
         focusOnSelect: true,
         nextArrow: $('.page__surf .navigation__nav-item_next'),
         prevArrow: $('.page__surf .navigation__nav-item_prev'),
         draggable: false,
         asNavFor: ".surf__slider",
         responsive: [
            {
               breakpoint: 320,
               settings: {
                  slidesToShow: 1,
               }
            },
            {
               breakpoint: 479.98,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 767.98,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 1322,
               settings: {
                  slidesToShow: 4,
               }
            },
            {
               breakpoint: 1920,
               settings: {
                  slidesToShow: 5,
               }
            },
         ],
         mobileFirst: true,
      });
      //========================================================================================================================================================
      //surf-slider
      //========================================================================================================================================================
      $('.surf__slider').slick({
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
      $('.travel-sleep__slider_travel').slick({
         infinite: false,
         fade: true,
         draggable: false,
         nextArrow: $('.page__travel .navigation__nav-item_next'),
         prevArrow: $('.page__travel .navigation__nav-item_prev'),
         zIndex: 10,
      });
      //========================================================================================================================================================


      //slide_sleep
      //========================================================================================================================================================
      $('.travel-sleep__slider_sleep').slick({
         infinite: false,
         fade: true,
         draggable: false,
         nextArrow: $('.page__sleep .navigation__nav-item_next'),
         prevArrow: $('.page__sleep .navigation__nav-item_prev'),
         zIndex: 10,
      });
      //========================================================================================================================================================


      //slide_shop
      //========================================================================================================================================================
      $('.slider-shop').slick({
         infinite: false,
         fade: true,
         draggable: false,
         nextArrow: $('.page__shop .navigation__nav-item_next'),
         prevArrow: $('.page__shop .navigation__nav-item_prev'),
         zIndex: 10,
      });
      //========================================================================================================================================================

      //add-sub
      //========================================================================================================================================================

      $('.add').click(function () {
         if ($(this).prev().val() < 9) {
            $(this).prev().val(+$(this).prev().val() + 1);
         }
      });
      $('.sub').click(function () {
         if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
         }
      });
      //========================================================================================================================================================

      //Count-price
      //=======================================================================================================================================================
      $('.slide-travel-sleep__quantity-icon').on('click', function () {
         var parents = $(this).parents('.slide-travel-sleep');
         let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * ($('.guests', parents).val() - 1);
         $('.summ', parents).html('$' + summ);
      });

      //здесь рассчитывает сумму с исходными значениями !
      $('.slide-travel-sleep__quantity').each(function () {
         var parents = $(this).parents('.slide-travel-sleep');
         let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * ($('.guests', parents).val() - 1);
         $('.summ', parents).html('$' + summ);
      });
      //========================================================================================================================================================

      //shop-info
      //========================================================================================================================================================
      $(".slider-shop__product .slider-shop__product-info").click(function (e) {
         e.preventDefault();
         $(".slider-shop__product .slider-shop__product-info").removeClass('_active');
         $(this).addClass('_active');
      });

      //========================================================================================================================================================
   });
};