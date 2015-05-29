var Filme = require('../models/filme.js');

exports.index = function(req, res) {
  res.render('index');
};

exports.lista = function(req, res) {
  Filme.find({}, function(erro, filmes) {
    res.json({filmes: filmes});
  });
};

exports.grava = function(req, res) {
  var filme = new Filme(req.body);

  filme.save(function(error, filme) {
    if(error) {
      return console.log(error);
    }
    res.send('Filme ' + filme.titulo + ' adicionado com sucesso!');
  });
};
