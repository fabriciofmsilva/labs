<?php
  require_once "Avaliador.php";
  require_once "ConstrutorDeLeilao.php";

  class AvaliadorTest extends PHPUnit_Framework_TestCase {

    private $leiloeiro;

    public function SetUp() {
      $this->leiloeiro = new Avaliador();
    }

    public function testDeveAceitarLancesEmOrdemDecrescente() {

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $construtor = new ConstrutorDeLeilao();
      $leilao = $construtor->para("Playstation 4")
                  ->lance($renan, 400)
                  ->lance($caio, 350)
                  ->lance($felipe, 250)
                  ->constroi();

      $this->leiloeiro->avalia($leilao);

      $maiorEsperado = 400;
      $menorEsperado = 250;
      $this->assertEquals($maiorEsperado, $this->leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $this->leiloeiro->getMenorLance());
    }

    public function testDeveAceitarLancesEmOrdemCrescente() {

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $construtor = new ConstrutorDeLeilao();
      $leilao = $construtor->para("Playstation 4")
                  ->lance($felipe, 250)
                  ->lance($caio, 350)
                  ->lance($renan, 400)
                  ->constroi();

      $this->leiloeiro->avalia($leilao);

      $maiorEsperado = 400;
      $menorEsperado = 250;
      $this->assertEquals($maiorEsperado, $this->leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $this->leiloeiro->getMenorLance());
    }

    public function testDeveAceitarApenasUmLance() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");

      $leilao->propoe(new Lance($renan, 2000));

      $this->leiloeiro->avalia($leilao);

      $maiorEsperado = 2000;
      $menorEsperado = 2000;

      $this->assertEquals($maiorEsperado, $this->leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $this->leiloeiro->getMenorLance());
    }

    public function testDeveAceitarLancesEmOrdemAleatoria() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $leilao->propoe(new Lance($felipe, 200));
      $leilao->propoe(new Lance($caio, 450));
      $leilao->propoe(new Lance($renan, 120));
      $leilao->propoe(new Lance($felipe, 700));
      $leilao->propoe(new Lance($caio, 630));
      $leilao->propoe(new Lance($felipe, 230));

      $this->leiloeiro->avalia($leilao);

      $maiorEsperado = 700;
      $menorEsperado = 120;
      $this->assertEquals($maiorEsperado, $this->leiloeiro->getMaiorLance());
      $this->assertEquals($menorEsperado, $this->leiloeiro->getMenorLance());
    }

    public function testDeveCalcularAMedia() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $caio = new Usuario("Caio");
      $felipe = new Usuario("Felipe");

      $leilao->propoe(new Lance($renan, 300));
      $leilao->propoe(new Lance($caio, 400));
      $leilao->propoe(new Lance($felipe, 500));

      $this->leiloeiro->avalia($leilao);

      $media = 400;
      $this->assertEquals($media, $this->leiloeiro->getMedia(), 0.0001);
    }

    public function testDeveEncontrarOsTresMaioresLances() {
      // $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $mauricio = new Usuario("Mauricio");

      $construtor = new ConstrutorDeLeilao();
      $leilao = $construtor->para("Playstation 4")
                  ->lance($renan, 200)
                  ->lance($mauricio, 300)
                  ->lance($renan, 400)
                  ->lance($mauricio, 500)
                  ->constroi();
      // $leilao->propoe(new Lance($renan, 200));
      // $leilao->propoe(new Lance($mauricio, 300));
      // $leilao->propoe(new Lance($renan, 400));
      // $leilao->propoe(new Lance($mauricio, 500));

      $this->leiloeiro->avalia($leilao);

      $this->assertEquals(3, count($this->leiloeiro->getMaiores()));
      $this->assertEquals(500, $this->leiloeiro->getMaiores()[0]->getValor());
      $this->assertEquals(400, $this->leiloeiro->getMaiores()[1]->getValor());
      $this->assertEquals(300, $this->leiloeiro->getMaiores()[2]->getValor());
    }

    public function testDeveDevolverTodosLancesCasoNaoHajaNoMinimo3() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $mauricio = new Usuario("Mauricio");

      $leilao->propoe(new Lance($renan, 200));
      $leilao->propoe(new Lance($mauricio, 300));

      $this->leiloeiro->avalia($leilao);

      $this->assertEquals(2, count($this->leiloeiro->getMaiores()));
      $this->assertEquals(300, $this->leiloeiro->getMaiores()[0]->getValor());
      $this->assertEquals(200, $this->leiloeiro->getMaiores()[1]->getValor());
    }

    public function testDeveDevolverListaVaziaCasoNaoHajaLances() {
      $leilao = new Leilao("Playstation 4");

      $renan = new Usuario("Renan");
      $mauricio = new Usuario("Mauricio");

      $this->leiloeiro->avalia($leilao);

      $maiores = $this->leiloeiro->getMaiores();

      $this->assertEquals(0, count($maiores));
    }

    // public function tearDown() {
    //   var_dump("fim");
    // }

    // public static function setUpBeforeClass() {
    //   var_dump("before class");
    // }

    // public static function tearDownAfterClass() {
    //   var_dump("after class");
    // }

  }
?>
