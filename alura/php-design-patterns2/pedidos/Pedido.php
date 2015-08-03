<?php
  class Pedido {
    private $cliente;
    private $valor;
    private $status;

    function __construct($nomeCliente, $novoValor) {
      $this->cliente = $nomeCliente;
      $this->valor = $novoValor;
      $this->status = new Novo();
    }

    public function pagar() {
      $this->status = new Pago();
    }

    public function finalizar() {
      $this->status = new Finalizado();
    }

    public function getCliente() {
      return $this->cliente;
    }
  }
?>
