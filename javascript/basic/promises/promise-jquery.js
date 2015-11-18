var jqDeferred = $.ajax('/whatever.json');

jqDeferred.then(function(response, statusText, xhrObj) {
  // ...
}, function(xhrObj, textStatus, err) {
  // ...
});

var jsPromise = Promise.resolve($.ajax('/whatever.json'));

jsPromise.then(function(response) {
  // ...
}, function(xhrObj) {
  // ...
});
