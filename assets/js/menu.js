import menus from './menu-items.js';

var menuList = document.getElementById('menu-wrapper');
var allMenu = document.getElementById('all-menu');
var foodBtn = document.getElementById('food-btn');
var drinkBtn = document.getElementById('drink-btn');


function hideAll() {
    menuList.innerHTML = '';
}

function renderAll() {
    // e.preventDefault();
    console.log('all');
    hideAll();
    menus.forEach(menu => {
        var template = `
        <div class="menu-item">
        <div class="menu-img">
        <img src="${menu.image}" alt="${menu.name}">
        </div>
        <div class="menu-item-details">
        <h3>${menu.name}</h3>
        <p>${menu.description}</p>
        <p>Rp. ${menu.price}</p>
        </div>
        </div>
        `;
        menuList.innerHTML += template;
    });
}
allMenu.addEventListener('click', renderAll);

function renderFood() {
    // e.preventDefault();
    console.log('food');
    hideAll();
    menus.forEach(menu => {
        if (menu.type === 'food') {
            var template = `
            <div class="menu-item">
            <div class="menu-img">
            <img src="${menu.image}" alt="${menu.name}">
            </div>
            <div class="menu-item-details">
            <h3>${menu.name}</h3>
            <p>${menu.description}</p>
            <p>Rp. ${menu.price}</p>
            </div>
            </div>
            `;
            menuList.innerHTML += template;
        }
    });
}
foodBtn.addEventListener('click', renderFood);


function renderDrink() {
    // e.preventDefault();
    console.log('drink');
    hideAll();
    menus.forEach(menu => {
        if (menu.type === 'drink') {
            var template = `
            <div class="menu-item">
                <div class="menu-img">
                <img src="${menu.image}" alt="${menu.name}">
                </div>
                <div class="menu-item-details">
                <h3>${menu.name}</h3>
                <p>${menu.description}</p>
                <p>Rp. ${menu.price}</p>
                </div>
                </div>
                `;
            menuList.innerHTML += template;
        }
    });
}
drinkBtn.addEventListener('click', renderDrink);


document.addEventListener('DOMContentLoaded', (e) => {
    renderAll();
    
    console.log("ok");
});
