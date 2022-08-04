//Menu Icons
let menu=document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar");
menu.onclick = () =>{
  navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll= () =>{
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};
//Swiper for reviews
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//Header background change on scroll
let header=document.querySelector("header");
window.addEventListener("scroll", () => {
 header.classList.toggle("header-active", window.scrollY > 0);
});

//Animate on scroll JS
AOS.init({
  offset: 400, 
  delay: 0, 
  duration: 300 
});