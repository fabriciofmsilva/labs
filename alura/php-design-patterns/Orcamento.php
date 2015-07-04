<?php
  class Orcamento {
    private $valor;
    private $itens;
    private $estadoAtual;

    function __construct($valor) {
      $this->valor = $valor;
      $this->itens = array();
      $this->estadoAtual = new EmAprovacao();
    }

    public function getValor() {
      return $this->valor;
    }

    public function setValor($novoValor) {
      $this->valor = $novoValor;
    }

    public function getItens() {
      return $this->itens;
    }

    public function addItem($novoItem) {
      $this->itens[] = $novoItem;
    }

    public function getEstado() {
      return $this->estadoAtual;
    }

    public function setEstado(EstadoDeUmOrcamento $novoEstado) {
      $this->estadoAtual = $novoEstado;
    }

    public function aplicaDescontoExtra() {
      $this->estadoAtual->aplicaDescontoExtra($this);
    }

    public function aprova() {
      $this->estadoAtual->aprova($this);
    }

    public function reprova() {
      $this->estadoAtual->reprova($this);
    }

    public function finaliza() {
      $this->estadoAtual->finaliza($this);
    }
  }
?>
