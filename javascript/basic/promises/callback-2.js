var img1 = document.querySelector('.img-1');

function loaded() {
  // woo yey image loaded
  console.log('woo yey image loaded');
}

if(img1.complete) {
  console.log('image load complete');
  loaded();
} else {
  img1.addEventListener('load', loaded);
}

img1.addEventListener('error', function() {
  // argh everything's broken
  console.log('argh everything\'s broken');
});
