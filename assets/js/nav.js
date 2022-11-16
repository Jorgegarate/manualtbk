const menuBtn = document.querySelector('.menu-btn');
const navColor = document.querySelector('.nav--color');
const scrollContent = document.querySelector('.scroll');
const accordionButton = document.querySelector('.accordion-button');
const mainContent = document.querySelector('.main');
const menuClose = document.querySelector('.btn--close');
const media = window.matchMedia("(min-width: 992px)")
const accordionCollapse= document.querySelector(".accordion-collapse")
let menuOpen = false;


menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navColor.classList.add('active');
    mainContent.classList.add('active');
    accordionCollapse.classList.remove('none')

    menuOpen = true;
    if(window.innerWidth>=992){
      menuClose.classList.add('active');
      scrollContent.classList.add('active');
      accordionCollapse.classList.add('none')
      accordionButton.classList.add('active')
    }
  } else {
    menuBtn.classList.remove('active');
    navColor.classList.remove('active');
    scrollContent.classList.remove('active');
    mainContent.classList.remove('active');
    accordionCollapse.classList.remove('none')
    accordionButton.classList.remove('active')
    menuOpen = false;
  }

});

menuClose.addEventListener('click', () => {
      menuClose.classList.remove('active');
      scrollContent.classList.remove('active');
      navColor.classList.remove('active');
      mainContent.classList.remove('active');
      if(window.innerWidth>=992){
        scrollContent.classList.add('active');
        accordionCollapse.classList.remove('none')
      }
      menuOpen = false;
});

navColor.addEventListener('click', () => {
  if(window.innerWidth>=992){
    accordionCollapse.classList.remove('none')
    navColor.classList.remove('active');
    mainContent.classList.remove('active');
  } else {
    menuClose.classList.remove('active');
    mainContent.classList.remove('active');
    scrollContent.classList.remove('active');
    mainContent.classList.remove('active');
  }

  
  menuOpen = false;
});


