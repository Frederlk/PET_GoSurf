// Подключение функционала "Чертогов Фрилансера"
import Rellax from "rellax";
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {
    document.addEventListener("click", documentActions);
    // Actions (Делегирование событий Click)
    function documentActions(e) {
        const target = e.target;
        if ($(target).hasClass("header__search-icon")) {
            $(".header__form").toggleClass("_active");
        } else if (!target.closest(".header__form") && $(".header__form._active")) {
            $(".header__form").removeClass("_active");
        }
    }

    if ($(".main__image-ibg")) {
        let rellax = new Rellax(".main__image-ibg");
    }

    //add-sub
    //========================================================================================================================================================
    $(".add").click(function () {
        if ($(this).prev().val() < 9) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".sub").click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                    .next()
                    .val(+$(this).next().val() - 1);
        }
    });
    //========================================================================================================================================================

    //Count-price
    //=======================================================================================================================================================
    $(".slide-travel-sleep__quantity-icon").on("click", function () {
        var parents = $(this).parents(".slide-travel-sleep");
        let summ =
            $(".summ", parents).data("nights") * $(".nights", parents).val() +
            $(".summ", parents).data("guests") * ($(".guests", parents).val() - 1);
        $(".summ", parents).html("$" + summ);
    });

    //здесь рассчитывает сумму с исходными значениями !
    $(".slide-travel-sleep__quantity").each(function () {
        var parents = $(this).parents(".slide-travel-sleep");
        let summ =
            $(".summ", parents).data("nights") * $(".nights", parents).val() +
            $(".summ", parents).data("guests") * ($(".guests", parents).val() - 1);
        $(".summ", parents).html("$" + summ);
    });
    //========================================================================================================================================================

    //shop-info
    //========================================================================================================================================================
    $(".slider-shop__product .slider-shop__product-info").click(function (e) {
        e.preventDefault();
        $(".slider-shop__product .slider-shop__product-info").removeClass("_active");
        $(this).addClass("_active");
    });
    //========================================================================================================================================================
});
