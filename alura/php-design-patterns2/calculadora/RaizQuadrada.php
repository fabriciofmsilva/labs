<?php
  class RaizQuadrada implements Expressao {
    private $esquerdo;

    function __construct(Expressao $ladoEsquerdo) {
      $this->esquerdo = $ladoEsquerdo;
    }

    public function avalia() {
      $valorEsquerda = $this->esquerdo->avalia();

      return Math.sqrt($valorEsquerda);
    }
  }
?>
