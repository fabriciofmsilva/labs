var img1 = document.querySelector('.img-1');

img1.callThisIfLoadedOrWhenLoaded(function() {
  // loaded
}).orIfFailedCallThis(function() {
  // failed
});

// and...
whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
  // all loaded
}).orIfSomeFailedCallThis(function() {
  // one or more failed
});
