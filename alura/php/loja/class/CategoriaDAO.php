<?php

class CategoriaDAO {

  function __constructor($conexao) {
    $this->conexao = $conexao;
  }

  function listaCategorias() {
    $categorias = array();
    $query = "SELECT * FROM categorias";
    $resultado = mysqli_query($this->$conexao, $query);
    while($categoria_atual = mysqli_fetch_assoc($resultado)) {
      $categoria = new Categoria;
      $categoria->setId($categoria_atual['id']);
      $categoria->setNome($categoria_atual['nome']);
      array_push($categorias, $categoria);
    }
    return $categorias;
  }

}
