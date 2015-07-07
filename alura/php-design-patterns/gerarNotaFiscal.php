<?php
  date_default_timezone_set("Brazil/East");

  require "AcoesAoGerarNota.php";
  require "NotaFiscal.php";
  require "Item.php";
  require "NotaFiscalBuilder.php";
  require "Impressora.php";
  require "NotaFiscalDAO.php";
  require "EnviadorDeSMS.php";

  $geradorDeNotas = new NotaFiscalBuilder();
  $geradorDeNotas->comEmpresa("Alura");
  $geradorDeNotas->comCnpj("1234");
  $geradorDeNotas->addItem(new Item("Tijolo", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->comObservacao("Tijolos amarelos");
  $geradorDeNotas->naData();

  // acoes
  $geradorDeNotas->addAcao(new Impressora());
  $geradorDeNotas->addAcao(new NotaFiscalDAO());
  $geradorDeNotas->addAcao(new EnviadorDeSMS());

  $notaFiscal = $geradorDeNotas->build();

  echo "<pre>";

  var_dump($notaFiscal);
?>
