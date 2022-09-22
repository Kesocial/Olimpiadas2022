const navli = document.querySelectorAll(".nav__ul > .nav__li");
const btnNav = document.getElementById("nav-icon4");
const navUlToggle = document.querySelector(".nav__ul--toggle");
const nav = document.querySelector(".nav");

window.addEventListener("resize", () => {
    btnNav.classList.remove('open');
    navUlToggle.classList.remove('open');
});


btnNav.addEventListener("click", () => {
    btnNav.classList.toggle('open');
    navUlToggle.classList.toggle('open');
});

navli.forEach((element) => {
    element.addEventListener("click", (event) => {
        limpiarNav(navli);
        element.classList.add("active");
    })
});