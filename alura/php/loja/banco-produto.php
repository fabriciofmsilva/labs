<?php
require_once("classe/Categoria.php");
require_once("classe/Produto.php");
require_once("conecta.php");

function listaProdutos($conexao) {
  $produtos = array();
  $resultado = mysqli_query($conexao, "SELECT p.*, c.nome AS categoria_nome FROM produtos AS p JOIN categorias AS c ON c.id = p.categoria_id");
  while($produto_atual = mysqli_fetch_assoc($resultado)) {
    $produto = new Produto;
    $categoria = new Categoria;
    $categoria->setNome($produto_atual['categoria_nome']);
    $produto->setId($produto_atual['id']);
    $produto->setNome($produto_atual['nome']);
    $produto->setPreco($produto_atual['preco']);
    $produto->setDescricao($produto_atual['descricao']);
    $produto->setCategoria($categoria);
    $produto->setUsado($produto_atual['usado']);
    array_push($produtos, $produto);
  }
  return $produtos;
}

function insereProduto($conexao, Produto $produto) {
  //$nome = msqli_real_escape_string($conexao, $nome);
  //$preco = msqli_real_escape_string($conexao, $preco);
  //$descricao = msqli_real_escape_string($conexao, $descricao);
  $query = "INSERT INTO produtos (nome, preco, descricao, categoria_id, usado) VALUES ('{$produto->getNome()}', {$produto->getPreco()}, '{$produto->getDescricao()}', {$produto->getCategoria()->getId()}, {$produto->getUsado()})";
  return mysqli_query($conexao, $query);
}

function alteraProduto($conexao, Produto $produto) {
  //$nome = msqli_real_escape_string($conexao, $nome);
  //$preco = msqli_real_escape_string($conexao, $preco);
  //$descricao = msqli_real_escape_string($conexao, $descricao);
  $query = "UPDATE produtos SET nome = '{$produto->getNome()}', preco = {$produto->getPreco()}, descricao = '{$produto->getDescricao()}', categoria_id = {$produto->getCategoria()->getId()}, usado = {$produto->getUsado()} WHERE id = {$produto->getId()}";
  return mysqli_query($conexao, $query);
}

function buscaProduto($conexao, $id) {
  $query = "SELECT * FROM produtos WHERE id = {$id}";
  $resultado = mysqli_query($conexao, $query);
  return mysqli_fetch_assoc($resultado);
}

function removeProduto($conexao, $id) {
  $query = "DELETE FROM produtos WHERE id = {$id}";
  return mysqli_query($conexao, $query);
}
