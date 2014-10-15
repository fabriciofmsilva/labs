var menu = document.getElementById('menuList');
var menuButton = document.getElementById('menuToggle');
menu.style.left = '-200px';

function menuToggle(e) {
  e.preventDefault();

  if (menu.style.left === '-200px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-200px';
  }
}

menuButton.addEventListener('click', menuToggle, false);
