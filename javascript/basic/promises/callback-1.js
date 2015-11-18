var img1 = document.querySelector('.img-1');

img1.addEventListener('load', function() {
  // woo yey image loaded
  console.log('woo yey image loaded');
});

img1.addEventListener('error', function() {
  // argh everything's broken
  console.log('argh everything\'s broken');
});
