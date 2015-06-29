<?php
  class LivroFisico extends Livro {

    public $taxaImpressao;

    public function getTaxaImpressao() {
      return $taxaImpressao;
    }

    public function setTaxaImpressao($taxaImpressao) {
      $this->$taxaImpressao = $taxaImpressao;
    }

  }
?>
