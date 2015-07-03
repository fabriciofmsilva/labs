<?php
  abstract class Relatorio {
    protected abstract function cabecalho();
    protected abstract function rodape();
    protected abstract function corpo($contas);

    public function imprime($contas) {
      $this->cabecalho();
      $this->corpo($contas);
      $this->rodape();
    }
  }

  class RelatorioSimples extends Relatorio {
    protected function cabecalho() {
      echo "Banco";
    }

    protected function rodape() {
      echo "(11) 1111-1111";
    }

    protected function corpo($contas) {
      foreach($contas as $conta) {
        echo $conta->getNome() . " - " . $conta->getSaldo();
      }
    }
  }

  class RelatorioComplexo extends Relatorio {
    protected function cabecalho() {
      echo "Banco";
      echo "Rua dos Bobos, 0";
      echo "(11) 1111-1111";
    }

    protected function rodape() {
      echo "banco@banco.com.br";
      echo date("d/m/Y");
    }

    protected function corpo($contas) {
      foreach($contas as $conta) {
        echo $conta->getNome() . " - " . $conta->getSaldo() . " - " . $conta->getAgencia() . " - " . $conta->getSaldo();
      }
    }
  }
?>
