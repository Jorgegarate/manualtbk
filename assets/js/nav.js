const menuBtn = document.querySelector('.menu-btn');
const navColor = document.querySelector('.nav--color');
const scrollContent = document.querySelector('.scroll');
const mainContent = document.querySelector('.main');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('active');
    navColor.classList.add('active')
    scrollContent.classList.add('active')
    mainContent.classList.add('active')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('active');
    navColor.classList.remove('active')
    scrollContent.classList.remove('active')
    mainContent.classList.remove('active')
    menuOpen = false;
  }
});
