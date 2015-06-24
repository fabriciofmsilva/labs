<?php
require "classe/Produto.php";

$livro = new Produto;
$livro->setNome("Livro da casa do codigo");
$livro->setPreco(10);

$livro2 = new Produto;
$livro2->setNome("Livro da casa do codigo");
$livro2->setPreco(10);

$livro2 = $livro;

if($livro === $livro2) {
  echo "sao iguais";
} else {
  echo "sao diferentes";
}
?>
