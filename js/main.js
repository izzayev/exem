var elHeader = document.querySelector(".header__container");
var elBtn = document.querySelector(".header__button");


elBtn.addEventListener("click", function ( )=> {
    elHeader.classList.add("header__active-container")
})