const menuBtn = document.querySelector('.menu-btn');
const navColor = document.querySelector('.nav--color');
const scrollContent = document.querySelector('.scroll');
const accordionButton = document.querySelectorAll('.accordion-button');
const mainContent = document.querySelector('.main');
const buttonAccordionCollapse = document.querySelectorAll('.accordion-collapse');
const media = window.matchMedia("(min-width: 992px)");
const accordionCollapse= document.querySelector(".accordion-collapse");
const blackVeil =document.querySelector('.black--veil')

let menuOpen = false;


menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navColor.classList.add('active');
    mainContent.classList.add('active');
    accordionCollapse.classList.remove('none')
    accordionButton.forEach(element => {element.classList.add('collapsed')})
    menuOpen = true

    if(window.innerWidth>=992){
      scrollContent.classList.add('active');
      accordionCollapse.classList.add('none');
      accordionButton.forEach(element => {element.classList.add('active')
      element.classList.remove('collapsed')})
      buttonAccordionCollapse.forEach(element =>{element.classList.add('none')});
    }
    else {
        if (window.innerWidth<992){
        blackVeil.classList.add('active')
      }
    } 
}
  else { 
    menuBtn.classList.remove('active');
    navColor.classList.remove('active');
    scrollContent.classList.remove('active');
    mainContent.classList.remove('active');
    accordionCollapse.classList.remove('none')
    accordionButton.forEach(element =>{element.classList.remove('active')})
    blackVeil.classList.remove('active')
    menuOpen = false;
  }


});

navColor.addEventListener('click', () => {
  if((window.innerWidth>=992)&(menuOpen===true)){
    console.log("estadp",menuOpen)
    accordionCollapse.classList.remove('none');
    accordionButton.forEach(element =>{element.classList.remove('collapsed')});
    buttonAccordionCollapse.forEach(element =>{element.classList.add('none')});

  } else {
    menuOpen = false;
    mainContent.classList.remove('active');
    scrollContent.classList.remove('active');
    mainContent.classList.remove('active');
    buttonAccordionCollapse.forEach(element =>{element.classList.remove('none')})
    
  }
});
blackVeil.addEventListener('click', () => {
    navColor.classList.remove('active');
    menuBtn.classList.remove('active');
    blackVeil.classList.remove('active')
    menuOpen = false;

});


