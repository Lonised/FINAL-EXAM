document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebarContainer.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});



// ПРИ КЛИКЕ НА ЛЕВУЮ КНОПКУ МЫШИ СОЗДАЕТСЯ ТЕКСТОВОЕ ПОЛЕ
function init() {
    const createTextField = () => {
        const textField = document.createElement("textarea");
        textField.classList.add("notion-text");
        textField.style.resize = "vertical"; 
        
        const wrapper = document.querySelector('.wrapper-notion');
        if (wrapper) {
            wrapper.appendChild(textField);
        } else {
            console.error("Element 'wrapper-notion' not found.");
        }
    }
    
    let hasTextFieldCreated = false;

    document.addEventListener("click", () => {
        if (!hasTextFieldCreated) {
            createTextField();
            hasTextFieldCreated = true;
        }
    });
}

document.addEventListener("DOMContentLoaded", init);




// ФУНКЦИЯ ПРАВАЯ КНОПКА МЫШИ
let lastClickTime = 0;

const showWindow = (event) => {
    event.preventDefault();
    
    const currentTime = new Date().getTime();
    
    if (currentTime - lastClickTime > 300) {
        const x = event.clientX;
        const y = event.clientY;
        
        const window = document.getElementById("window");
        
        if (window) {
            window.style.display = "block";
            window.style.left = x + "px";
            window.style.top = y + "px";
            
            document.addEventListener("click", closeWindow);
        } else {
            console.error("Элемент 'window' не найден.");
        }
    }
    
    lastClickTime = currentTime;
}

const closeWindow = (event) => {
    const window = document.getElementById("window");
    if (event && event.target) {
        if (!window.contains(event.target)) {
            window.style.display = "none";
            document.removeEventListener("click", closeWindow);
        }
    }
}

document.addEventListener('contextmenu', showWindow);
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});



document.getElementById("fontButtonSidebar").addEventListener("click", function() {
    document.getElementById("fontPopup").style.display = "block";
});

document.getElementById("fontButtonPopup1").addEventListener("click", function() {
    changeFont('roboto');
    hideFontPopup();
});

document.getElementById("fontButtonPopup2").addEventListener("click", function() {
    changeFont('sedan-sc-regular');
    hideFontPopup();
});

function hideFontPopup() {
    document.getElementById("fontPopup").style.display = "none";
}

function changeFont(fontClass) {
    const elements = document.querySelectorAll('.wrapper-notion input[type="text"], .wrapper-notion p');
    elements.forEach(function(element) {
        element.classList.remove('roboto', 'sedan-sc-regular');
        element.classList.add(fontClass);
    });

    const textAreas = document.querySelectorAll('.notion-text');
    textAreas.forEach(function(textArea) {
        textArea.style.fontFamily = fontClass;
    });

    setTimeout(function() {
        elements.forEach(function(element) {
            element.style.fontFamily = fontClass;
        });
    }, 10); 
}


let isBold = false;

function toggleBold() {
    const elements = document.querySelectorAll('.wrapper-notion input[type="text"], .wrapper-notion p');
    
    if (!isBold) {
        elements.forEach(function(element) {
            element.style.fontWeight = 'bold';
        });
        isBold = true;
    } else {
        elements.forEach(function(element) {
            element.style.fontWeight = 'normal';
        });
        isBold = false;
    }
}

const fontButton2 = document.getElementById('fontButton2'); 
fontButton2.addEventListener('click', toggleBold);



const button = document.getElementById('underlineButton');
const elementsToUnderline = document.querySelectorAll('.wrapper-notion input[type="text"], .wrapper-notion p');

button.addEventListener('click', function(event) {
    event.preventDefault();
    elementsToUnderline.forEach(function(element) {
        if (element.classList.contains('underlined')) {
            element.classList.remove('underlined');
        } else {
            element.classList.add('underlined');
        }
    });
});


document.addEventListener("click", function(event) {
    const fontPopup = document.getElementById("fontPopup");
    const fontButtonSidebar = document.getElementById("fontButtonSidebar");
    if (event.target !== fontPopup && event.target !== fontButtonSidebar) {
        fontPopup.style.display = "none";
    }
});