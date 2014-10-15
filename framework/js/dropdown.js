var dropLink = document.getElementById('dropLink');
var dropdown = document.getElementById('dropdown');
dropdown.style.display = 'none';

function dropToggle(e) {
  e.preventDefault();

  if(dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

dropLink.addEventListener('click', dropToggle, false);
