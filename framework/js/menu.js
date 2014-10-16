(function () {
  var menu = document.getElementById('menuList');
  var menuButton = document.getElementById('menuToggle');
  menu.classList.add('menu__close');

  function menuToggle(e) {
    e.preventDefault();
    menu.classList.toggle('menu__close');
  }

  menuButton.addEventListener('click', menuToggle, false);
}());
