<?php
class ProdutoDAO {

  private $conexao;

  function __construct($conexao) {
    $this->conexao = $conexao;
  }

  function listaProdutos() {
    $produtos = array();
    $resultado = mysqli_query($this->conexao, "SELECT p.*, c.nome AS categoria_nome FROM produtos AS p JOIN categorias AS c ON c.id = p.categoria_id");
    while($produto_atual = mysqli_fetch_assoc($resultado)) {
      $categoria = new Categoria;
      $categoria->setNome($produto_atual['categoria_nome']);

      $produto = new $produto_atual['tipoProduto']($produto_atual['nome'], $produto_atual['preco'], $produto_atual['descricao'], $categoria, $produto_atual['usado']);
      $produto->setIsbn($produto_atual['isbn']);

      $produto->setId($produto_atual['id']);

      array_push($produtos, $produto);
    }
    return $produtos;
  }

  function insereProduto(Produto $produto) {
    if($produto->temIsbn()) {
      $isbn = $produto->getIsbn();
    } else {
      $isbn = null;
    }

    $tipoProduto = get_class($produto);

    $query = "INSERT INTO produtos (nome, preco, descricao, categoria_id, usado, isbn, tipoProduto) VALUES ('{$produto->getNome()}', {$produto->getPreco()}, '{$produto->getDescricao()}', {$produto->getCategoria()->getId()}, {$produto->getUsado()}, '{$isbn}', '{$tipoProduto}')";
    return mysqli_query($this->conexao, $query);
  }

  function alteraProduto(Produto $produto) {
    $query = "UPDATE produtos SET nome = '{$produto->getNome()}', preco = {$produto->getPreco()}, descricao = '{$produto->getDescricao()}', categoria_id = {$produto->getCategoria()->getId()}, usado = {$produto->getUsado()} WHERE id = {$produto->getId()}";
    return mysqli_query($this->conexao, $query);
  }

  function buscaProduto($id) {
    $query = "SELECT * FROM produtos WHERE id = {$id}";
    $resultado = mysqli_query($this->conexao, $query);
    return mysqli_fetch_assoc($resultado);
  }

  function removeProduto($id) {
    $query = "DELETE FROM produtos WHERE id = {$id}";
    return mysqli_query($this->conexao, $query);
  }

}
