<?php
  class DescontoPorVendaCasada implements Desconto {
    private $proximo;

    private function existe($nomeDoItem, Orcamento $orcamento) {
      foreach($orcamento->getItens() as $item) {
        if($item->getNome() == $nomeDoItem) {
          return true;
        }
        return false;
      }
    }

    private function aconteceuVendaCasadaEm(Orcamento $orcamento) {
      return $this->existe("Lapis", $orcamento) && $this->existe("Caneta", $orcamento);
    }

    public function setProximo(Desconto $proximo) {
      $this->proximo = $proximo;
    }

    public function desconta(Orcamento $orcamento) {
      if($this->aconteceuVendaCasadaEm($orcamento)) {
        return $orcamento->getValor() * 0.05;
      } else {
        return $this->proximo->desconta($orcamento);
      }
    }
  }
?>
