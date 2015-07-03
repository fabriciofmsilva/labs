<?php
  class ICMS extends TemplateDeImpostoCondicional {
    function __construct($imposto = null) {
      parent::__construct($imposto);
    }

    protected function deveUsarMaximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() > 500;
    }

    protected function maximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.15 + $this->calculaOutroImposto($orcamento);
    }

    protected function minimaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.05 + $this->calculaOutroImposto($orcamento);
    }
  }
?>
