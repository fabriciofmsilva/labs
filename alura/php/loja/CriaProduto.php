<?php
  require "class/Produto.php";

  $livro = new Produto;
  $ebook = new Produto;

  $livro->nome = "Livro de PHP";
  $ebook->nome = "Livro de PHP online";

  echo "<pre>";
  var_dump($livro);
  var_dump($ebook);
  echo "</pre>";
?>
