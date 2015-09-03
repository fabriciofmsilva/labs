<?php
  require "Usuario.php";
  require "Lance.php";
  require "Leilao.php";

  class LeilaoTest extends PHPUnit_Framework_TestCase {

    public function testDeveProporUmLance() {

      $leilao = new Leilao("Mackbook caro");

      $this->assertEquals(0, count($leilao->getLances()));

      $joao = new Usuario("Joao");

      $leilao->propoe(new Lance($joao, 2000));

      $this->assertEquals(1, count($leilao->getLances()));
      $this->assertEquals(2000, $leilao->getLances()[0]->getValor());

    }

    public function testDeveBarrarDoisLancesSeguidos() {

      $leilao = new Leilao("Macbook caro");

      $joao = new Usuario("Joao");

      $leilao->propoe(new Lance($joao, 2000));
      // tem que ignorar este cara
      $leilao->propoe(new Lance($joao, 2000));

      $this->assertEquals(1, count($leilao->getLances()));
      $this->assertEquals(2000, $leilao->getLances()[0]->getValor());

    }

    public function testDeveDarNoMaximoCincoLances() {

      $leilao = new Leilao("Macbook caro");

      $jobs = new Usuario("Jobs");
      $gates = new Usuario("Gates");

      $leilao->propoe(new Lance($jobs, 2000));
      $leilao->propoe(new Lance($gates, 3000));
      $leilao->propoe(new Lance($jobs, 4000));
      $leilao->propoe(new Lance($gates, 5000));
      $leilao->propoe(new Lance($jobs, 6000));
      $leilao->propoe(new Lance($gates, 7000));
      $leilao->propoe(new Lance($jobs, 8000));
      $leilao->propoe(new Lance($gates, 9000));
      $leilao->propoe(new Lance($jobs, 10000));
      $leilao->propoe(new Lance($gates, 11000));
      // deve ser ignorado
      $leilao->propoe(new Lance($jobs, 12000));

      $this->assertEquals(10, count($leilao->getLances()));
      $this->assertEquals(11000, $leilao->getLances()[9]->getValor());
    }

    public function testDeveDobrarOUltimoLanceDado() {
      $leilao = new Leilao("Macbook Pro 15");
      $steveJobs = new Usuario("Steve Jobs");
      $billGates = new Usuario("Bill Gates");

      $leilao->propoe(new Lance($steveJobs, 2000));
      $leilao->propoe(new Lance($billGates, 3000));
      $leilao->dobraLance($steveJobs);

      $this->assertEquals(4000, $leilao->getLances()[2]->getValor(), 0.00001);
    }

    public function testNaoDeveDobrarCasoNaoHajaLanceAnterior() {
      $leilao = new Leilao("Macbook Pro 15");
      $steveJobs = new Usuario("Steve Jobs");

      $leilao->dobraLance($steveJobs);

      $this->assertEquals(0, count($leilao->getLances()));
    }

  }

?>
