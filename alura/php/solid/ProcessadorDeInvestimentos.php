<?php
  class ProcessadorDeInvestimentos {
    public function processa() {
      $contas = $this->contasDoBando();
      foreach($contas as $conta) {
        $conta->rende();
      }
    }

    private function contasDoBanco() {
      $contas = array();
      $contas[] = $this->contaComumCom(100);
      $contas[] = $this->contaEstudanteCom(200);
      $contas[] = $this->contaComumCom(300);
    }

    private function contaComumCom($valor) {
      $conta = new ContaComum();
      $conta->deposita($valor);
      return $conta;
    }

    private function contaEstudanteCom($valor) {
      $conta = new contaEstudante();
      $conta->deposita($valor);
      return $conta;
    }
  }
?>
