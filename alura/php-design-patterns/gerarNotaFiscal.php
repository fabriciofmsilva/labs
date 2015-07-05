<?php
  date_default_timezone_set("Brazil/East");

  require "NotaFiscal.php";
  require "Item.php";
  require "NotaFiscalBuilder.php";

  $geradorDeNotas = new NotaFiscalBuilder();
  $geradorDeNotas->comEmpresa("Alura");
  $geradorDeNotas->comCnpj("1234");
  $geradorDeNotas->addItem(new Item("Tijolo", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->addItem(new Item("Cimento 1kg", 250));
  $geradorDeNotas->comObservacao("Tijolos amarelos");
  $geradorDeNotas->naData();

  $notaFiscal = $geradorDeNotas->build();

  echo "<pre>";

  var_dump($notaFiscal);
?>
