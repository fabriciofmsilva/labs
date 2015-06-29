<?php
 class Ebook extends Livro {

    private $waterMark;

    function atualizaBaseadoEm($params) {
      $this->nome = $params['nome'];
      $this->preco = $params['preco'];
      $this->descricao = $params['descricao'];
      $this->categoriaId = $params['categoria_id'];
      $this->usado = $params['usado'];
      $this->waterMark = $params['waterMark'];
    }

    public function getWaterMark() {
      return $waterMark;
    }

    public function setWaterMark($waterMark) {
      $this->$waterMark = $waterMark;
    }

    public function calculaPrecoDeVenda() {
      return $this->getPreco() + $this->getPreco() * 0.15;
    }

 }
?>
