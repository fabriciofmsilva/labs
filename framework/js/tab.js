var tabs = document.getElementsByClassName('tab-item');
var tabLinks = document.getElementsByClassName('tab-link');

for (var i = 0; i < tabs.length; i ++) {
  tabs[i].style.display = 'none';
}

tabs[0].style.display = 'block';

function tabOpen(e) {
  e.preventDefault();
  for (var i = 0; i < tabs.length; i ++) {
    tabs[i].style.display = 'none';
  }

  //console.log(this);
  var link = this.attributes.href.value;
  //console.log(link.replace('#', ''));
  document.getElementById(link.replace('#', '')).style.display = 'block';
}

for (var j = 0; j < tabLinks.length; j ++) {
  tabLinks[j].addEventListener('click', tabOpen, true);
}
