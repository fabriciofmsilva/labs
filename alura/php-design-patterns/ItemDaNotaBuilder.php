<?php
  class ItemDaNotaBuilder {
    private  $descricao;
    private $valor;

    public function comDescricao($descricao) {
      $this->descricao = $descricao;
      return $this;
    }

    public function comValor($valor) {
      $this->valor = $valor;
      return $this;
    }

    public ItemDaNota constroi() {
      return new ItemDaNota($this->descricao, $this->valor);
    }
  }
?>
