var trs = document.getElementsByTagName('tr');
percorreArray(trs, function(tr) {
  tr.addEventListener('mouseover', function() {
    this.setAttribute('style', 'background: grey;');
  });
  tr.addEventListener('mouseout', function() {
    this.setAttribute('style', 'background: white;');
  })
});
