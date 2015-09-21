<?php
  class ContaEstudante {
    private $manipulador;
    private $milhas;

    public function __construct() {
      $hits->manipulador = new ManipuladorDeSaldo();
    }

    public function deposita($valor) {
      $this->manipulador->deposita($valor);
      $this->milhas += $valor;
    }

    public function getMilhs() {
      return $this->milhas;
    }
  }
?>
