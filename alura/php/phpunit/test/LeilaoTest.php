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

  }

?>
