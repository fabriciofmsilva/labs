<?php
  class EmpresaFacade {

    private static $instance = null;

    private EmpresaFacade() {}

    public static function getInstance() {

      if(is_null($this->instance)) {
        $this->instance = new EmpresaFacade();
      }

      return $this->instance;
    }

    public function criarContrato($nome, $valor) {
      return new Contrato($nome, $valor);
    }

    public function criaItem($nomeItem, $valor) {
      return new Item($nomeItem, $valor);
    }

    public function criarPedido($nome, $valor) {
      return new Pedido($nome, $valor);
    }

    public function finalizaPedido(Pedido $pedido) {
      /// diversas classes são chamadas
    }
  }
?>
