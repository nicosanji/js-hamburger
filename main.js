//Elementi da selezionare (icona + hamburger menu)

const hamIcon = document.querySelector(".header-right a i");

const hamList = document.querySelector(".hamburger-menu");

console.log(hamIcon);
console.log(hamList);

hamIcon.addEventListener("click", function () {
    hamIcon.classList.add("bg-dark");
});



hamIcon.addEventListener("click", function () {
    hamList.classList.add("d-block");
});