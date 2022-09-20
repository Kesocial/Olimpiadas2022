const parallax = document.getElementById("parallax");
const parallaxImg = document.getElementById("parallaxImg");
const parallaxH = parallax.offsetHeight;
const nav = document.querySelector(".nav");
const landing = document.querySelector(".main.landing");

const navli = document.querySelectorAll(".nav__ul > .nav__li");
const limpiarLi = ()=>{
    navli.forEach((e)=>{
        e.classList.remove("active");
    })
}
navli.forEach((element)=>{
element.addEventListener("click",(event)=>{
    limpiarLi();
    element.classList.add("active");
})
});
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= parallax.offsetHeight - nav.offsetHeight) {
        nav.classList.add("nav-contrast");
        parallaxImg.style.top = 0;
        // landing.style.paddingTop = nav.offsetHeight + "px";
        // parallax.style.paddingTop = 0;
    } else {
        nav.classList.remove("nav-contrast");
        parallaxImg.style.top = window.scrollY + "px";
        // landing.style.paddingTop = 0;
        // parallax.style.paddingTop = nav.offsetHeight + "px";
    }
});

window.addEventListener("load", () => {
    console.log(window.scrollY);
    if (window.scrollY >= parallax.offsetHeight - nav.offsetHeight) {
        nav.classList.add("nav-contrast");
        parallaxImg.style.top = 0;
        // landing.style.paddingTop = nav.offsetHeight + "px";
        // parallax.style.paddingTop = 0;
    } else {
        nav.classList.remove("nav-contrast");
        parallaxImg.style.top = window.scrollY + "px";
        // landing.style.paddingTop = 0;
        // parallax.style.paddingTop = nav.offsetHeight + "px";
    }
});
const btnNav = document.getElementById("nav-icon4");
const navUlToggle = document.querySelector(".nav__ul--toggle");
btnNav.addEventListener("click", () => {
    btnNav.classList.toggle('open');
    navUlToggle.classList.toggle('open');
});

window.addEventListener("resize", () => {
    btnNav.classList.remove('open');
    navUlToggle.classList.remove('open');
});