<?php
  class Finalizado implements EstadoDeUmOrcamento {
    public function aplicaDescontoExtra(Orcamento $orcamento) {
      throw new Exception("Um orçamento finalizado não pode receber descontos");
    }

    public function aprova(Orcamento $orcamento) {
      throw new Exception ("Apenas orçamentos em aprovação podem ser aprovados");
    }

    public function reprova(Orcamento $orcamento) {
      throw new Exception("Este orçamos já se encontra reprovado");
    }

    public function finaliza(Orcamento $orcamento)  {
      throw new Exception ("Apenas orçamos aprovados podem ser finalizados");
    }
  }
?>
