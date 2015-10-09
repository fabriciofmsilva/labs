request.addListener('data', function(chunck) {
  // called when a new chunk of data was received
});

request.addListener('end', function() {
  // called when all chunks of data have been received
});
