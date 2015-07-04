<?php
  class EmAprovacao implements EstadoDeUmOrcamento {
    private $descontoAplicado = false;

    public function aplicaDescontoExtra(Orcamento $orcamento) {
      if(!$this->descontoAplicado) {
        $orcamento->setValor($orcamento->getValor() - $orcamento->getValor() * 0.02);
        $this->descontoAplicado = true;
      } else {
        throw new Exception("Desconto já aplicado!");
      }
    }

    public function aprova(Orcamento $orcamento) {
      $orcamento->setEstado(new Aprovado());
    }

    public function reprova(Orcamento $orcamento) {
      $orcamento->setEstado(new Reprovado());
    }

    public function finaliza(Orcamento $orcamento)  {
      throw new Exception ("Apenas orçamentos aprovados podem ser finalizados");
    }
  }
?>
