<?php
  class Soma implements Expressao {
    private $esquerdo;
    private $direito;

    function __construct(Expressao $ladoEsquerdo, Expressao $ladoDireito) {
      $this->esquerdo = $ladoEsquerdo;
      $this->direito = $ladoDireito;
    }

    public function avalia() {
      $valorEsquerda = $this->esquerdo->avalia();
      $valorDireita = $this->direito->avalia();

      return $valorEsquerda + $valorDireita;
    }

    public function aceita(Impressora $Impressora) {
      $Impressora->visitaSoma($this);
    }

    public function getEsquerda() {
      return $this->esquerdo;
    }

    public function getDireita() {
      return $this->direito;
    }
  }
?>
