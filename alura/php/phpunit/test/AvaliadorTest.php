<?php
  require "Usuario.php";
  require "Lance.php";
  require "Leilao.php";
  require "Avaliador.php";

  class AvaliadorTest extends PHPUnit_Framework_TestCase {

    public function testDeveAceitarLancesEmOrdemDecrescente() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $leilao->propoe(new Lance($renan, 400));
      $leilao->propoe(new Lance($caio, 350));
      $leilao->propoe(new Lance($felipe, 250));

      $leiloeiro = new Avaliador();
      $leiloeiro->avalia($leilao);

      $maiorEsperado = 400;
      $menorEsperado = 250;
      $this->assertEquals($maiorEsperado, $leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $leiloeiro->getMenorLance());
    }

    public function testDeveAceitarLancesEmOrdemCrescente() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $leilao->propoe(new Lance($felipe, 250));
      $leilao->propoe(new Lance($caio, 350));
      $leilao->propoe(new Lance($renan, 400));

      $leiloeiro = new Avaliador();
      $leiloeiro->avalia($leilao);

      $maiorEsperado = 400;
      $menorEsperado = 250;
      $this->assertEquals($maiorEsperado, $leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $leiloeiro->getMenorLance());
    }

    public function testDeveAceitarApenasUmLance() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");

      $leilao->propoe(new Lance($renan, 2000));

      $leiloeiro = new Avaliador();
      $leiloeiro->avalia($leilao);

      $maiorEsperado = 2000;
      $menorEsperado = 2000;

      $this->assertEquals($maiorEsperado, $leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $leiloeiro->getMenorLance());
    }

    public function testDeveCalcularAMedia() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $leilao->propoe(new Lance($renan, 300));
      $leilao->propoe(new Lance($caio, 400));
      $leilao->propoe(new Lance($felipe, 500));

      $leiloeiro = new Avaliador();
      $leiloeiro->avalia($leilao);

      $media = 400;
      $this->assertEquals($media, $leiloeiro->getMedia(), 0.0001);
    }

  }
?>
