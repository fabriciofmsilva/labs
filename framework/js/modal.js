var modal = document.getElementById('modal');
var modalButtonOpen = document.getElementById('modalButtonOpen');
var modalButtonClose = document.getElementById('modalButtonClose');

function modalOpen(e) {
  e.preventDefault();
  modal.classList.remove('modal__close');
  modal.classList.add('modal__open');
}

function modalClose(e) {
  e.preventDefault();
  modal.classList.remove('modal__open');
  modal.classList.add('modal__close');
}

modal.classList.add('modal__close');
modalButtonOpen.addEventListener('click', modalOpen, false);
modalButtonClose.addEventListener('click', modalClose, false);
