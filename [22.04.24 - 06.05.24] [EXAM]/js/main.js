const wrapperHeader = document.querySelector('.wrapper-header');
const headerBurger = document.querySelector('.header-burger');
const popupMenu = document.querySelector('.popup-menu');
const container = document.getElementById('demo-horizontal-scroll-container');


// BURGER-MENU
document.addEventListener("DOMContentLoaded", function () {
    headerBurger.addEventListener('click', function (event) {
        event.preventDefault();
        popupMenu.classList.toggle('active');
    });
});

// АНИМАЦИЯ ПРИ ПРОКРУТКИ ВНИЗ УЛУЧШАЕТСЯ WRAPPER-HEADER
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        wrapperHeader.style.height = '80px';
        wrapperHeader.style.backgroundColor = '#ffffff';
        wrapperHeader.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        wrapperHeader.style.height = ''; 
        wrapperHeader.style.backgroundColor = ''; 
        wrapperHeader.style.boxShadow = ''; 
    }
});

window.addEventListener('scroll', function() {
    container.classList.remove('scroll-up-animation');
    container.classList.add('scroll-down-animation');
});


// АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ ПРОКРУТКИ ВНИЗ
window.addEventListener('scroll', function() {
    const wrapperElements = document.querySelectorAll('.container > .wrapper-demo, .container > .wrapper-about, .container > .wrapper-check, .container > .wrapper-tools, .container > .wrapper-end');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    for (const element of wrapperElements) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
      
        if (elementPosition < windowHeight + scrollPosition) {
            element.style.opacity = '1';
            element.style.transition = 'opacity 1.0s ease';
        } else {
            element.style.opacity = '0';
        }
    }
});
  

