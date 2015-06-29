<?php
  class LivroFisico extends Livro {

    public $taxaImpressao;

    function atualizaBaseadoEm($params) {
      $this->nome = $params['nome'];
      $this->preco = $params['preco'];
      $this->descricao = $params['descricao'];
      $this->categoriaId = $params['categoria_id'];
      $this->usado = $params['usado'];
      $this->taxaImpressao = $params['taxaImpressao'];
    }

    public function getTaxaImpressao() {
      return $taxaImpressao;
    }

    public function setTaxaImpressao($taxaImpressao) {
      $this->$taxaImpressao = $taxaImpressao;
    }

    public function calculaPrecoDeVenda() {
      return $this->getPreco() + $this->getPreco() * 0.1;
    }

  }
?>
