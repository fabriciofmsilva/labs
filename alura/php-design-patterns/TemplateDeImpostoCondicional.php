<?php
  abstract class TemplateDeImpostoCondicional extends Imposto {
    function __construct($imposto = null) {
      parent::__construct($imposto);
    }

    public function calcula(Orcamento $orcamento) {
      if($this->deveUsarMaximaTaxacao($orcamento)) {
        return $this->maximaTaxacao($orcamento) + $this->calculaOutroImposto($orcamento);
      } else {
        return $this->minimaTaxacao($orcamento) + $this->calculaOutroImposto($orcamento);
      }
    }

    protected abstract function deveUsarMaximaTaxacao(Orcamento $orcamento);
    protected abstract function maximaTaxacao(Orcamento $orcamento);
    protected abstract function minimaTaxacao(Orcamento $orcamento);
  }
?>
