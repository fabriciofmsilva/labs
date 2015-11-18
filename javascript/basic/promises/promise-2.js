img1.ready().then(function() {
  // loaded
}, function() {
  // failed
});

// and..
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // all loaded
}, function() {
  // one or more failed
});
