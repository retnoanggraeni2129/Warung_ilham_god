import menus from './menu-items.js';

var menuList = document.getElementById('menu-wrapper');

document.addEventListener('DOMContentLoaded', (event) => {


    menus.forEach( (menu) => {


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
    } );

    console.log("ok");
});
