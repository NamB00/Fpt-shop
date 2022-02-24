//Overlay
var search = document.querySelector(".header-search>input");
var boxSearch = document.querySelector(".search-box");
var overlaySearch = document.querySelector('.search-overlay');
var borDerSearch = document.querySelector('.header-search input');

search.addEventListener("click", function () {
    boxSearch.style.display = 'block';
    overlaySearch.style.visibility = 'unset';
    overlaySearch.style.opacity = '1';
    borDerSearch.style = 'border-bottom-left-radius: 0px;';
});

overlaySearch.addEventListener("click", function () {
    boxSearch.style.display = 'none';
    overlaySearch.style.visibility = 'hidden';
    overlaySearch.style.opacity = '0';

    //mobile
    mobileHeader.style = 'transform: translateY(0%);';
});
// Mobile
var mobileHeader = document.querySelector(".header__search--mobile");
var searchMobie = document.querySelector(".input__search--mobile");
var boxSearch = document.querySelector(".search-box");

searchMobie.addEventListener("click", function () {
    boxSearch.style.display = 'block';
    overlaySearch.style.visibility = 'unset';
    overlaySearch.style.opacity = '1';
    borDerSearch.style = 'border-bottom-left-radius: 0px;';
    mobileHeader.style = 'transform: translateY(-75%);';
});
// Moblie menu bar
var menuBar = document.querySelector(".mobile-menu");
var barIcon = document.querySelector(".bar-icon");
var closeIcon = document.querySelector(".close-icon");

barIcon.addEventListener("click", function () {
    menuBar.classList.add('show-menu');
    menuBar.classList.remove('close-menu');

});
closeIcon.addEventListener("click", function () {
    menuBar.classList.add('close-menu');
    menuBar.classList.remove('show-menu');

});

// Mobile menu
var arrow = document.querySelectorAll(".icon-down")[0];
var menuItem = document.querySelector(".mobile-fpt1");

arrow.addEventListener("click", function () {
    menuItem.classList.toggle('flex');
    arrow.classList.toggle('deg');
});
//
var arrow1 = document.querySelectorAll(".icon-down")[1];
var menuItem2 = document.querySelector(".mobile-fpt2");

arrow1.addEventListener("click", function () {
    menuItem2.classList.toggle('flex');
    arrow1.classList.toggle('deg');
});
//
var arrow2 = document.querySelectorAll(".icon-down")[2];
var menuItem3 = document.querySelector(".mobile-fpt3");

arrow2.addEventListener("click", function () {
    menuItem3.classList.toggle('flex');
    arrow2.classList.toggle('deg');
});
//
var arrow3 = document.querySelectorAll(".icon-down")[3];
var menuItem4 = document.querySelector(".mobile-fpt4");

arrow3.addEventListener("click", function () {
    menuItem4.classList.toggle('flex');
    arrow3.classList.toggle('deg');
});
//
var arrow4 = document.querySelectorAll(".icon-down")[4];
var menuItem5 = document.querySelector(".mobile-fpt5");

arrow4.addEventListener("click", function () {
    menuItem5.classList.toggle('flex');
    arrow4.classList.toggle('deg');
});
//
var arrow5 = document.querySelectorAll(".icon-down")[5];
var menuItem6 = document.querySelector(".mobile-fpt6");

arrow5.addEventListener("click", function () {
    menuItem6.classList.toggle('flex');
    arrow5.classList.toggle('deg');
});
////
const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");

function getTime (date) {
    let days, hours, minutes,seconds;
    const now = new Date();
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);
    if (timeRemaining >0 ) {
    // 1 ngay = 24 * 60 * 60 = 86400
    days = parseInt(timeRemaining / 86400);
    // 1h = 60 * 60 =3600
    timeRemaining = timeRemaining % 86400;
    hours = parseInt(timeRemaining / 3600);
    // 1p = 60s
    timeRemaining = timeRemaining % 3600;
    minutes = parseInt(timeRemaining / 60);
    // s
    seconds = parseInt(timeRemaining % 60);
    }

    daysText.textContent = days;
    hoursText.textContent = hours;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
}
// Sun Feb 20 2022 13:59:17 GMT+0700 (Giờ Đông Dương) {}

setInterval (function () {
    getTime("Sun Feb 30 2022 13:59:17 GMT+0700 (Giờ Đông Dương)");
}, 1000);

// slider
const slider = document.querySelector(".slider-container");
const sliderMain = document.querySelector(".slider-quantily");
const sliderItem = document.querySelectorAll(".slider-app a");
const nextBtn = document.querySelector(".slider-next");
const prevvBtn = document.querySelector(".slider-prev");

const sliderItemWidh = sliderItem[0].offsetWidth;
const sliderLenght =sliderItem.length;

let postionX = 0;
let index = 0;

prevvBtn.addEventListener("click", function()  {
    handleChangeSlider(-1);
});

nextBtn.addEventListener("click", function()  {
    handleChangeSlider(1);
});
function handleChangeSlider(direction) {
    if (direction === 1) {
        if (index >= sliderLenght -1) {
            index = sliderLenght -1;
            return;
        }
        postionX = postionX - sliderItemWidh;
        // console.log(postionX);
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index++;
    }else if (direction === -1) {
        if (index <= 0) {
            index = 0;
            return;
        }

        postionX = postionX + sliderItemWidh;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index--;
    }

}

setInterval(function() {

    postionX = postionX - sliderItemWidh;
    // console.log(postionX);
    sliderMain.style = `transform: translateX(${postionX}px)`;
    index++;
    if (index = sliderLenght -1) {
        postionX = 0;
        index = 0;
    }

},5000);

// containerc
var iconNext = document.querySelector('.next-product-hot');
var iconPrev = document.querySelector('.prev-product-hot');
var hotProductSize = document.querySelector('.product-hot-app').clientWidth;
var hotProductApp = document.querySelector('.product-app-quantily');

//so luong item
var fullClick = 4;
var maxClick = hotProductSize * fullClick - hotProductSize;
let hotIndex = 0;
// console.log(x.length)

function nextProductHot() {
    if (hotIndex < maxClick) {
        hotIndex += hotProductSize;
    } else {
        hotIndex = 0;
    }
    hotProductApp.style = `transform: translateX(${-hotIndex}px)`;
}

function prevProductHot() {
    if (hotIndex <= 0) {
        hotIndex = 0;
    } else {
        hotIndex -= hotProductSize;
    }
    hotProductApp.style = `transform: translateX(${hotIndex}px)`;
}
// function prevProductHot() {
//     if (index2 <= 0) {
//         index2 = 0;
//         return;
//     }
//     hotIndex = hotIndex + hotProductSize;
//     hotProductApp.style = `transform: translateX(${hotIndex}px)`;
//     index2--;
// }






