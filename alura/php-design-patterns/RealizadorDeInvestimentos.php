<?php
  interface Investimento {
    public function calcula(Conta $conta);
  }

  class Conservador implements Investimento {
    public function calcula(Conta $conta) {
      return $conta->getSaldo() * 0.008;
    }
  }

  class Moderado implements Investimento {
    private $random;

    public function calcula(Conta $conta) {
      $this->random = mt_rand(1,100);
      if($this->random >= 50) {
        return $conta->getSaldo() * 0.025;
      } else {
        return $conta->getSaldo() * 0.007;
      }
    }
  }

  class Arrojado implements Investimento {
    private $random;

    public function calcula(Conta $conta) {
      $this->random = mt_rand(1,100);
      if($this->random <= 20) {
        return $conta->getSaldo() * 0.05;
      } else if($escolhido > 20 && $escolhido <= 50) {
        return $conta->getSaldo() * 0.03;
      } else {
        return $conta->getSaldo() * 0.006;
      }
    }
  }

  class RealizadorDeInvestimentos {
    public function realiza(Conta $conta, Investimento $investimento) {
      $resultado = $investimento->calcula($conta);
      $conta->deposita($resultado * 0.75);
      return $conta->getSaldo();
    }
  }

  class Conta {
    private $saldo;

    function __construct($saldo) {
      $this->saldo = $saldo;
    }

    public function deposita($valor) {
      $this->saldo += $valor;
    }

    public function getSaldo() {
      return $this->saldo;
    }
  }

  $contaConservador = new Conta(100);
  $investimentoConservador = new RealizadorDeInvestimentos();
  echo "Conservador: " . $investimentoConservador->realiza($contaConservador, new Conservador());

  echo "<br>";

  $contaModerado = new Conta(100);
  $investimentoModerado = new RealizadorDeInvestimentos();
  echo "Moderado: " . $investimentoModerado->realiza($contaModerado, new Moderado());

  echo "<br>";

  $contaArrojado = new Conta(100);
  $investimentoArrojado = new RealizadorDeInvestimentos();
  echo "Arrojado: " . $investimentoArrojado->realiza($contaArrojado, new Arrojado());
?>
