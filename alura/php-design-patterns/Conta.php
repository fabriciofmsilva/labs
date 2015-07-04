<?php
  interface EstadoDaConta {
    public function saca(Conta $conta, $valor);
    public function deposita(Conta $conta, $valor);
  }

  class Positivo implements EstadoDaConta {
    public void saca(Conta $conta, $valor) {
      $conta->saldo -= $valor;
      if($conta->saldo < 0) $conta->estado = new Negativo();
    }

    public void deposita(Conta $conta, $valor) {
      $conta->saldo += $valor * 0.98;
    }
  }

  class Negativo implements EstadoDaConta {
    public function saca(Conta $conta, $valor) {
      throw new Exception("Sua conta está no vermelho. Não é possível sacar!");
    }

    public function deposita(Conta $conta, $valor) {
      $conta->saldo += $valor * 0.95;
      if($conta->saldo > 0) $conta->estado = new Positivo();
    }
  }

  class Conta {
    private $titular;
    private $saldo;
    protected $estado;

    function __construct($titular, $saldo) {
      $this->titular = $titular;
      $this->saldo = $saldo;
    }

    public function getTitular() {
      return $this->titular;
    }

    public function getSaldo() {
      return $this->titular;
    }

    public function setTitular($nome) {
      $this->titular = $nome;
    }

    public function setSaldo($valor) {
      $this->saldo = $valor;
    }

    public function saca($valor) {
      $estado->saca($this, $valor);
    }

    public function deposita($valor) {
      $estado->deposita($this, $valor);
    }
  }

  class Formato {
    public static $XML = 1;
    public static $CSV = 2;
    public static $PORCENTO = 3;
  }

  class Requisicao {
    private $formato;

    function __construct($formato) {
      $this->formato = $formato;
    }

    public function getFormato() {
      return $this->formato;
    }

    public function setFormato($formato) {
      $this->formato = $formato;
    }
  }

  interface Resposta {
    public function responde(Requisicao $req, Conta $conta);
    public function setProxima(Resposta $resposta);
  }

  class RespostaEmXml implements Resposta {
    private $outraReposta;

    public function responde(Requisicao $req, Conta $conta) {
      if($req->getFormato() == Formato::XML) {
        echo "<conta><titular>" . $conta->getTitular() . "</titular><saldo>" . $conta->getSaldo() . "</saldo></conta>";
      } else {
        $outraResposta->responde($req, $conta);
      }
    }

    public function setProxima(Resposta $resposta) {
      $this->resposta = $resposta;
    }
  }

  class RespostaEmCsv implements Resposta {
    private $outraReposta;

    public function responde(Requisicao $req, Conta $conta) {
      if($req->getFormato() == Formato::CSV) {
        echo $conta->getTitular() .";" . $conta->getSaldo();
      } else {
        $outraResposta->responde($req, $conta);
      }
    }

    public function setProxima(Resposta $resposta) {
      $this->resposta = $resposta;
    }
  }

  class RespostaEmPorcento implements Resposta {
    private $outraReposta;

    public function responde(Requisicao $req, Conta $conta) {
      if($req->getFormato() == Formato::PORCENTO) {
        echo $conta->getTitular() . "%" . $conta->getSaldo());
      } else {
        $outraResposta->responde($req, $conta);
      }
    }

    public function setProxima(Resposta $resposta) {
      $this->resposta = $resposta;
    }
  }
?>
