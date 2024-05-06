const wrapperHeader = document.querySelector('.wrapper-header');
const headerBurger = document.querySelector('.header-burger');
const popupMenu = document.querySelector('.popup-menu');
const container = document.getElementById('demo-horizontal-scroll-container');

const wrapper = document.querySelector('.save');
const exampleButton = document.getElementById('example-save-button');
const createButton = document.getElementById('save-button-new');



// НЕБОЛЬШАЯ АНИМАЦИЯ ПРИ ПРОКРУТКИ САЙТА
window.addEventListener('scroll', function() {
    const wrapperElements = document.querySelectorAll('.container > .wrapper-save, .container > .wrapper-ens');
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



//ФУНКЦИЯ, КОТОРАЯ СОХРАНЯЕТ ВСЕ МОИ КАРТОЧКИ НА САЙТЕ
function saveToLocalStorage(id, title, description) {
    let saves = JSON.parse(localStorage.getItem("saves")) || [];
    saves.push({ id, title, description });
    localStorage.setItem("saves", JSON.stringify(saves));
}

function loadFromLocalStorage() {
    const saves = JSON.parse(localStorage.getItem("saves")) || [];
    saves.forEach(save => {
        createSaveCard(save.id, save.title, save.description);
    });
}

//ФУНКЦИЯ, КОТОРАЯ СОЗДАЕТ КАРТОЧКИ СО СВОИМ ID 
function createSaveCard(id, title, description) {
    const link = document.createElement("a");
    link.setAttribute("href", "base.html");

    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("onclick", "openSaveDialog()");

    const saveButtonLeft = document.createElement("div");
    saveButtonLeft.setAttribute("class", "save-button-left");

    const h2 = document.createElement("h2");
    const titleText = document.createTextNode(title);
    h2.appendChild(titleText);

    const b = document.createElement("b");
    const bText = document.createTextNode("Описание:");
    b.appendChild(bText);
    const p = document.createElement("p");
    const descriptionText = document.createTextNode(description);
    p.appendChild(descriptionText);

    saveButtonLeft.appendChild(h2);
    saveButtonLeft.appendChild(b);
    saveButtonLeft.appendChild(p);

    button.appendChild(saveButtonLeft);
    link.appendChild(button);

    const saveContainer = document.querySelector(".save");
    saveContainer.appendChild(link);
}

function addSaveCard() {
    const title = prompt("Введите название:");
    const description = prompt("Введите описание:");
    const id = "custom-save-button-" + Math.floor(Math.random() * 1000); 
    saveToLocalStorage(id, title, description);
    createSaveCard(id, title, description);
}

window.onload = function() {
    loadFromLocalStorage();
};



function createSaveCard(id, title, description) {
    const link = document.createElement("a");
    link.setAttribute("href", "base.html");

    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("onclick", "openSaveDialog()");

    const saveButtonLeft = document.createElement("div");
    saveButtonLeft.setAttribute("class", "save-button-left");

    const closeButton = document.createElement("span");
    closeButton.setAttribute("class", "close-button");
    closeButton.innerHTML = "&times;";

    closeButton.onclick = function() {
        deleteSaveFromLocalStorage(id);
        saveContainer.removeChild(link.parentElement);
    };

    const h2 = document.createElement("h2");
    const titleText = document.createTextNode(title);
    h2.appendChild(titleText);

    const b = document.createElement("b");
    const bText = document.createTextNode("Описание:");
    b.appendChild(bText);
    const p = document.createElement("p");
    const descriptionText = document.createTextNode(description);
    p.appendChild(descriptionText);

    saveButtonLeft.appendChild(closeButton);
    saveButtonLeft.appendChild(h2);
    saveButtonLeft.appendChild(b);
    saveButtonLeft.appendChild(p);

    button.appendChild(saveButtonLeft);
    link.appendChild(button);

    const saveContainer = document.querySelector(".save");
    saveContainer.appendChild(link);
}

function deleteSaveFromLocalStorage(id) {
    let saves = JSON.parse(localStorage.getItem("saves")) || [];
    saves = saves.filter(save => save.id !== id);
    localStorage.setItem("saves", JSON.stringify(saves));
}
