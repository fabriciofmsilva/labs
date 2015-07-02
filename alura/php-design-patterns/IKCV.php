<?php
  class IKCV extends TemplateDeImpostoCondicional {
    protected function deveUsarMaximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() > 500 && $this->temItemMaiorQue100ReaisNo($orcamento);
    }

    protected function maximaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.10;
    }

    protected function minimaTaxacao(Orcamento $orcamento) {
      return $orcamento->getValor() * 0.06;
    }

    private function temItemMaiorQue100ReaisNo(Orcamento $orcamento) {
      foreach($orcamento->getItens() as $item) {
        if($item->getValor() > 100) {
          return true;
        }
        return false;
      }
    }
  }
?>
