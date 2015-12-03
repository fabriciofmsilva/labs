'use strict';

var collapseButtonEl = document.querySelector('a');
var collapseBlockEl = document.querySelector('.collapse');

function show() {
  collapseBlockEl.classList.add('in');
}

function hide() {
  collapseBlockEl.classList.remove('in');
}

function onCollapseButtonElClick(event) {
  event.stopPropagation();
  event.preventDefault();

  if (collapseBlockEl.classList.contains('in')) {
    collapseBlockEl.classList.remove('in');
    return;
  }

  collapseBlockEl.classList.add('in');
}

collapseButtonEl.addEventListener('click', onCollapseButtonElClick, false);
