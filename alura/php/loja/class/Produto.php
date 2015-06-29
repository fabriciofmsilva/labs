<?php
  abstract class Produto {
    private $id;
    private $nome;
    private $preco;
    private $descricao;
    private $categoria;
    private $usado;

    function __construct($nome = "Produto indefinido", $preco = 99999, $descricao = "contate o administrador", Categoria $categoria, $usado = "usado") {
      $this->nome = $nome;
      $this->setPreco($preco);
      $this->descricao = $descricao;
      $this->categoria = $categoria;
      $this->usado = $usado;
    }

    abstract public function atualizaBaseadoEm($params);

    abstract public function calculaPrecoDeVenda();

    public function calculaImposto() {
      return $this->getPreco() * 0.195;
    }

    function __toString() {
      return $this->getNome().":".$this->getPreco()."<br>";
    }

    // function __destruct() {
    //   echo "o objeto $this->nome foi destruido";
    // }

    public function temIsbn() {
      return $this instanceof Livro;
    }

    public function valorComDesconto($valor = 0.05) {
      if ($valor > 0 && $valor <= 0.5) {
        $this->setPreco($this->preco - $this->preco * $valor);
      }
      return $this->preco;
    }

    public function setId($id) {
      $this->id = $id;
    }

    public function getId() {
      return $this->id;
    }

    public function setNome($nome) {
      $this->nome = $nome;
    }

    public function getNome() {
      return $this->nome;
    }

    public function setPreco($preco) {
      if($preco > 0) {
        $this->preco = $preco;
      }
    }

    public function getPreco() {
      return $this->preco;
    }

    public function setDescricao($descricao) {
      $this->descricao = $descricao;
    }

    public function getDescricao() {
      return $this->descricao;
    }

    public function setCategoria($categoria) {
      $this->categoria = $categoria;
    }

    public function getCategoria() {
      return $this->categoria;
    }

    public function setUsado($usado) {
      $this->usado = $usado;
    }

    public function getUsado() {
      return $this->usado;
    }

  }
?>
