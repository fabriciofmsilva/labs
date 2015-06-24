<?php
require_once("classe/Categoria.php");
require_once("conecta.php");

function listaCategorias($conexao) {
  $categorias = array();
  $query = "SELECT * FROM categorias";
  $resultado = mysqli_query($conexao, $query);
  while($categoria_atual = mysqli_fetch_assoc($resultado)) {
    $categoria = new Categoria;
    $categoria->setId($categoria_atual['id']);
    $categoria->setNome($categoria_atual['nome']);
    array_push($categorias, $categoria);
  }
  return $categorias;
}
