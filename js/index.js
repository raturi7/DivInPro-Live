$(document).ready(function () {
    $('.partners-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



$(document).ready(function () {
    $('.associations-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});


$(document).ready(function () {
    $('.medias-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});


const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});


const re_Btn = document.querySelector(".re_btn");
const text_1 = document.querySelector(".text_1");
re_Btn.addEventListener("click", (e) => {
    text_1.classList.toggle("show-more");
    if (re_Btn.innerText === "Read More") {
        re_Btn.innerText = "Read Less";
    } else {
        re_Btn.innerText = "Read More";
    }
});

// KPO
// 1st card
const btn1 = document.querySelector(".btn1");
const t1 = document.querySelector(".t1");
btn1.addEventListener("click", (e) => {
    t1.classList.toggle("show-more");
    if (btn1.innerText === "Read More") {
        btn1.innerText = "Read Less";
    } else {
        btn1.innerText = "Read More";
    }
});

// 2nd card
const btn2 = document.querySelector(".btn2");
const t2 = document.querySelector(".t2");
btn2.addEventListener("click", (e) => {
    t2.classList.toggle("show-more");
    if (btn2.innerText === "Read More") {
        btn2.innerText = "Read Less";
    } else {
        btn2.innerText = "Read More";
    }
});

// 3rd card
const btn3 = document.querySelector(".btn3");
const t3 = document.querySelector(".t3");
btn3.addEventListener("click", (e) => {
    t3.classList.toggle("show-more");
    if (btn3.innerText === "Read More") {
        btn3.innerText = "Read Less";
    } else {
        btn3.innerText = "Read More";
    }
});
