<?php
  class Desconto300Reais implements Desconto {
    private $proximo;

    public function setProximo(Desconto $proximo) {
      $this->proximo = $proximo;
    }

    public function desconta(Orcamento $orcamento) {
      if($orcamento->getValor() > 300) {
        return $orcamento->getValor() * 0.01;
      } else {
        return $this->proximo->desconta($orcamento);
      }
    }
  }
?>
