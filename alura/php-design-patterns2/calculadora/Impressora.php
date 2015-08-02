<?php
  class Impressora implements Visitor {
    public function visitaNumero(Numero $numero) {
      echo $numero->getNumero();
    }

    public function visitaSoma(Soma $soma) {
      echo "(";
      $soma->getEsquerda()->aceita($this);
      echo "+";
      $soma->getDireita()->aceita($this);
      echo ")";
    }

    public function visitaSubtracao(Subtracao $subtracao) {
      echo "(";
      $subtracao->getEsquerda()->aceita($this);
      echo "-";
      $subtracao->getDireita()->aceita($this);
      echo ")";
    }
  }
?>
