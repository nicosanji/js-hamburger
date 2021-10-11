//Elementi da selezionare (icona + hamburger menu)

const hamIcon = document.querySelector(".header-right a i");

const hamList = document.querySelector(".hamburger-menu");

// Controllo se i selettori sono corretti

console.log(hamIcon);
console.log(hamList);

// Al click compare la lista

hamIcon.addEventListener("click", function () {
    hamList.classList.add("active");
});

//Elementi da selezionare (icona "X")

const hamX = document.querySelector(".close");

// Controllo se il selettore è corretto

console.log(hamX);

// Al click scompare la lista

hamX.addEventListener("click", function () {
    hamList.classList.remove("active");
});