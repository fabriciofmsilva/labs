var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  var pathname = url.parse(request.url, true).pathname;
  var html;

  if (pathname && pathname != '/') {
    var arquivo = pathname + '.html';
    if (fs.existsSync(__dirname + arquivo)) {
      html = arquivo;
    } else {
      html = '/erro.html';
    }
  } else {
    html = '/artigos.html';
  }

  fs.readFile(__dirname + html, function(erro, html) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  });
});

server.listen(3000, function() {
  console.log('Servidor rodando');
});
