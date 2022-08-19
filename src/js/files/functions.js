// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}
/* Проверка мобильного браузера */
export let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
};

// Добавление loaded для HTML после полной загрузки страницы
export function addLoadedClass() {
    window.addEventListener("load", function () {
        setTimeout(function () {
            document.documentElement.classList.add("loaded");
        }, 0);
    });
}
// Получение хеша в адресе сайта
export function getHash() {
    if (location.hash) {
        return location.hash.replace("#", "");
    }
}
// Указание хеша в адресе сайта
export function setHash(hash) {
    hash = hash ? `#${hash}` : window.location.href.split("#")[0];
    history.pushState("", "", hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
export function fullVHfix() {
    const fullScreens = document.querySelectorAll("[data-fullscreen]");
    if (fullScreens.length && isMobile.any()) {
        window.addEventListener("resize", fixHeight);
        function fixHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        fixHeight();
    }
}
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
// export let bodyLockStatus = true;
// export let bodyLockToggle = (delay = 500) => {
//     if (document.documentElement.classList.contains("lock")) {
//         bodyUnlock(delay);
//     } else {
//         bodyLock(delay);
//     }
// };
// export let bodyUnlock = (delay = 500) => {
//     let body = document.querySelector("body");
//     if (bodyLockStatus) {
//         let lock_padding = document.querySelectorAll("[data-lp]");
//         setTimeout(() => {
//             for (let index = 0; index < lock_padding.length; index++) {
//                 const el = lock_padding[index];
//                 el.style.paddingRight = "0px";
//             }
//             body.style.paddingRight = "0px";
//             document.documentElement.classList.remove("lock");
//         }, delay);
//         bodyLockStatus = false;
//         setTimeout(function () {
//             bodyLockStatus = true;
//         }, delay);
//     }
// };
// export let bodyLock = (delay = 500) => {
//     let body = document.querySelector("body");
//     if (bodyLockStatus) {
//         let lock_padding = document.querySelectorAll("[data-lp]");
//         for (let index = 0; index < lock_padding.length; index++) {
//             const el = lock_padding[index];
//             el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
//         }
//         body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
//         document.documentElement.classList.add("lock");

//         bodyLockStatus = false;
//         setTimeout(function () {
//             bodyLockStatus = true;
//         }, delay);
//     }
// };
// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/menu-burger.html
Сниппет (HTML): menu
*/
export function menuInit() {
    if (document.querySelector(".icon-menu")) {
        document.addEventListener("click", function (e) {
            if (e.target.closest(".icon-menu")) {
                document.documentElement.classList.toggle("menu-open");
            } else if (!e.target.closest(".menu__body")) {
                menuClose();
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.which == 27 && e.code === "Escape" && document.documentElement.classList.contains("menu-open")) {
                menuClose();
            }
        });
    }
}
export function menuOpen() {
    document.documentElement.classList.add("menu-open");
}
export function menuClose() {
    document.documentElement.classList.remove("menu-open");
}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================
// FLS (Full Logging System)
export function FLS(message) {
    setTimeout(() => {
        if (window.FLS) {
            console.log(message);
        }
    }, 0);
}
// Убрать класс из всех элементов массива
export function removeClasses(array, className) {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
}
// Уникализация массива
export function uniqArray(array) {
    return array.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
}
// Функция получения индекса внутри родителя
export function indexInParent(parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
}
// Обработа медиа запросов из атрибутов
export function dataMediaQueries(array, dataSetValue) {
    // Получение объектов с медиа запросами
    const media = Array.from(array).filter(function (item, index, self) {
        if (item.dataset[dataSetValue]) {
            return item.dataset[dataSetValue].split(",")[0];
        }
    });
    // Инициализация объектов с медиа запросами
    if (media.length) {
        const breakpointsArray = [];
        media.forEach((item) => {
            const params = item.dataset[dataSetValue];
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });
        // Получаем уникальные брейкпоинты
        let mdQueries = breakpointsArray.map(function (item) {
            return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
        });
        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray = [];

        if (mdQueries.length) {
            // Работаем с каждым брейкпоинтом
            mdQueries.forEach((breakpoint) => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                // Объекты с нужными условиями
                const itemsArray = breakpointsArray.filter(function (item) {
                    if (item.value === mediaBreakpoint && item.type === mediaType) {
                        return true;
                    }
                });
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia,
                });
            });
            return mdQueriesArray;
        }
    }
}
//================================================================================================================================================================================================================================================================================================================
