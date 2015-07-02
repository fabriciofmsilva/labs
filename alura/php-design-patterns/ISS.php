<?php
  class ISS extends TemplateDeImpostoCondicional {
    protected function deveUsarMaximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() > 300;
    }

    protected function maximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.15;
    }

    protected function minimaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.1;
    }
  }
?>
