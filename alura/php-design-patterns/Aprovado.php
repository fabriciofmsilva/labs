<?php
  class Aprovado implements EstadoDeUmOrcamento {
    private $descontoAplicado = false;

    public function aplicaDescontoExtra(Orcamento $orcamento) {
      if(!$this->descontoAplicado) {
        $orcamento->setValor($orcamento->getValor() - $orcamento->getValor() * 0.05);
        $this->descontoAplicado = true;
      } else {
        throw new Exception("Desconto já aplicado!");
      }
    }

    public function aprova(Orcamento $orcamento) {
      throw new Exception("Este orçamento já se encontra aprovado");
    }

    public function reprova(Orcamento $orcamento) {
      throw new Exception("Um orcamento aprovado não pode ser reprovado");
    }

    public function finaliza(Orcamento $orcamento)  {
      $orcamento->setEstado(new Finalizado());
    }
  }
?>
