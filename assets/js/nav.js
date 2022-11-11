const menuBtn = document.querySelector('.menu-btn');
const navColor = document.querySelector('.nav--color');
const scrollContent = document.querySelector('.scroll');
const mainContent = document.querySelector('.main');
const menuClose = document.querySelector('.btn--close');
const media = window.matchMedia("(min-width: 992px)")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navColor.classList.add('active');
    mainContent.classList.add('active');
    menuClose.classList.add('active');
    menuOpen = true;
    if(window.innerWidth>=992){
      scrollContent.classList.add('active');
    }
  } else {
    menuBtn.classList.remove('active');
    navColor.classList.remove('active');
    scrollContent.classList.remove('active');
    mainContent.classList.remove('active');
    menuOpen = false;
  }

});

menuClose.addEventListener('click', () => {
      menuClose.classList.remove('active');
      scrollContent.classList.remove('active');
      navColor.classList.remove('active');
});

