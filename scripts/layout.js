const layout = {
    menuWidth: 300,
    developer: true,
    infosec: true,
    tech: true,
    linux: true
};
// menu side bar
const menu = document.getElementById("header");
// main page container
const body = document.querySelector(".main-container"); 
// content header
const mainHeader = document.querySelector(".main-header");
// content pane
const content = document.querySelector(".content");
// page footer
const footer = document.querySelector("footer");
// open / close menu button
const menuButton = document.querySelector('.icon-menu');

/* Menu funcionality
 * open / close
 */

const openMenu = () => {
    menu.style.left = '0'
    body.style.left = layout.menuWidth + 'px';
    body.style.width = 'calc(100% - ' + layout.menuWidth + 'px)';
    mainHeader.style.width = 'calc(100% - ' + layout.menuWidth + 'px)';
    content.style.maxWidth = '920px';
    footer.style.width = 'calc(100% - ' + layout.menuWidth + 'px)';
    footer.style.left = layout.menuWidth + 'px';
    Cookies.set('menu', true);
};

const closeMenu = () => {
    menu.style.left = '-250px';
    body.style.left = '50px';
    body.style.width = 'calc(100% - 50px)';
    mainHeader.style.width = 'calc(100% - 50px)';
    footer.style.width = 'calc(100% - 50px)';
    footer.style.left = '50px';
    Cookies.set('menu', false);
};


if(!Cookies.get('menu')) {
    Cookies.set('menu', true);
}

if(!Cookies.get('menu') === 'true') {
    closeMenu();
}

const activateMenu = () => {
    Cookies.get('menu') === 'true' ? closeMenu() : openMenu();
};

menuButton.addEventListener('click', activateMenu);

/* sub-menu functionality
 */
if(!Cookies.get('submenus')) {
    Cookies.set('submenus', JSON.stringify(layout));
}
var a = JSON.parse(Cookies.get('submenus'));

const subCatOpenSites = (sub, event) => {
    if(layout[sub] === false) {
        event.target.classList.add('rotateArrow');
        layout[sub] = true;
    } else {
        if(event.target.classList.contains('rotateArrow')) {
            event.target.classList.remove('rotateArrow')
        }
        layout[sub] = false;
    }
};
