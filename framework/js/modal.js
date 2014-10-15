var modal = document.getElementById('modal');
var shadow = document.getElementById('shadow');
var modalButtonOpen = document.getElementById('modalButtonOpen');
var modalButtonClose = document.getElementById('modalButtonClose');

function modalOpen(e) {
  e.preventDefault();
  modal.style.display = 'block';
  shadow.style.display = 'block';
}

function modalClose(e) {
  e.preventDefault();
  modal.style.display = 'none';
  shadow.style.display = 'none';
}

modal.style.display = 'none';
shadow.style.display = 'none';
modalButtonOpen.addEventListener('click', modalOpen, false);
modalButtonClose.addEventListener('click', modalClose, false);
