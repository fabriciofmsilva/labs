<?php
  class Conta {
    private $titular;
    private $saldo;

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
