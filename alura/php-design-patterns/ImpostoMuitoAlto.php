<?php
  class ImpostoMuitoAlto extends TemplateDeImpostoCondicional {
    function __construct($imposto = null) {
      parent::__construct($imposto);
    }

    protected function deveUsarMaximaTaxacao(Orcamento $orcamento) {
      return true;
    }

    protected function maximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.20 + $this->calculaOutroImposto($orcamento);
    }

    protected function minimaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.20 + $this->calculaOutroImposto($orcamento);
    }
  }
?>
