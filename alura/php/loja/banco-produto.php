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
    $categoria->nome = $produto_atual['categoria_nome'];
    $produto->id = $produto_atual['id'];
    $produto->nome = $produto_atual['nome'];
    $produto->preco = $produto_atual['preco'];
    $produto->descricao = $produto_atual['descricao'];
    $produto->categoria = $categoria;
    $produto->usado = $produto_atual['usado'];
    array_push($produtos, $produto);
  }
  return $produtos;
}

function insereProduto($conexao, Produto $produto) {
  //$nome = msqli_real_escape_string($conexao, $nome);
  //$preco = msqli_real_escape_string($conexao, $preco);
  //$descricao = msqli_real_escape_string($conexao, $descricao);
  $query = "INSERT INTO produtos (nome, preco, descricao, categoria_id, usado) VALUES ('{$produto->nome}', {$produto->preco}, '{$produto->descricao}', {$produto->categoria->id}, {$produto->usado})";
  return mysqli_query($conexao, $query);
}

function alteraProduto($conexao, Produto $produto) {
  //$nome = msqli_real_escape_string($conexao, $nome);
  //$preco = msqli_real_escape_string($conexao, $preco);
  //$descricao = msqli_real_escape_string($conexao, $descricao);
  $query = "UPDATE produtos SET nome = '{$produto->nome}', preco = {$produto->preco}, descricao = '{$produto->descricao}', categoria_id = {$produto->categoria_id}, usado = {$produto->usado} WHERE id = {$produto->id}";
  return mysqli_query($conexao, $query);
}

function buscaProduto($conexao, $produto) {
  $query = "SELECT * FROM produtos WHERE id = {$produto->id}";
  $resultado = mysqli_query($conexao, $query);
  return mysqli_fetch_assoc($resultado);
}

function removeProduto($conexao, $id) {
  $query = "DELETE FROM produtos WHERE id = {$id}";
  return mysqli_query($conexao, $query);
}
