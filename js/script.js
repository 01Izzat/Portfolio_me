//****TOGGLE MENU*********/
let menuIcon = document.querySelector('#menu-icon'),
    navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//****SCROOL SECTION ACTIVE LINK*********/
let section = document.querySelectorAll('section'),
navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY,
    offset = sec.offsetTop - 150,
    height = sec.offsetHeight,
    id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    }
  })

//****SRTYCY NAVBAR*********/
  let header = document.querySelector('.heading');
  
  header.classList.toggle("sticky", window.scrollY > 100);
  
  //****REMOVE TOGGLE MENU IsOnClick*********/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

//***********SWIPER************/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//***********DARK LIGHT MODE************/
let DarkModeIcon = document.querySelector('#darkMode-icon');

DarkModeIcon.onclick = () => {
  DarkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};