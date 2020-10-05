/*const photoSlider = document.querySelector(".slider-wrap");
const sliderImages = document.querySelectorAll(".slider-wrap img");
//Buttons
const btnPrev = document.querySelector(".photo__slider-prev");
const btnNext = document.querySelector(".photo__slider-next");

let i = 0;
let tmp = 0;

sliderImages[i].style.display = "block";
const Prev = () => {
    tmp = i;
    i--;
    if(i < 0) {
        i = sliderImages.length - 1;
        sliderImages[tmp].style.display = "none";
        return sliderImages[i].style.display = "block";
    }
    else{
        sliderImages[tmp].style.display = "none";
        return sliderImages[i].style.display = "block";
    }                                     
}

const Next = () => {
    tmp = i;
    i++;
    if(i > sliderImages.length - 1){
        i = 0;
        sliderImages[tmp].style.display = "none";
        return sliderImages[i].style.display = "block";
    }
    else{
        sliderImages[tmp].style.display = "none";
        return sliderImages[i].style.display = "block";
    }
}
const setImage = () => {
    i++;
    sliderImages[i].style.display = "block";
}

*/
$(function(){
    $('.menu__btn').on("click", function(){
        $('.menu__list').slideToggle();
    });
});