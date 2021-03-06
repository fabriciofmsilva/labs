<?php
  class ISS extends TemplateDeImpostoCondicional {
    function __construct($imposto = null) {
      parent::__construct($imposto);
    }

    protected function deveUsarMaximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() > 300;
    }

    protected function maximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.15 + $this->calculaOutroImposto($orcamento);
    }

    protected function minimaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.1 + $this->calculaOutroImposto($orcamento);
    }
  }
?>
