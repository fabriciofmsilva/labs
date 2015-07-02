<?php
  require "Orcamento.php";
  require "Desconto.php";
  require "DescontoPorCincoItens.php";
  require "DescontoPorMaisDeQuinhentosReais.php";
  require "Desconto300Reais.php";
  require "SemDesconto.php";
  require "Item.php";
  require "CalculadoraDeImpostos.php";
  require "CalculadoraDeDescontos.php";
  require "Imposto.php";
  require "TemplateDeImpostoCondicional.php";
  require "ICMS.php";
  require "ISS.php";
  require "IKCV.php";
  require "ICPP.php";

  $reforma = new Orcamento(490);

  $calculadora = new CalculadoraDeImpostos();

  echo $calculadora->calcula($reforma, new ICMS());

  echo "<br>";

  echo $calculadora->calcula($reforma, new ISS());

  echo "<br>";

  echo $calculadora->calcula($reforma, new IKCV());

  echo "<br>";

  echo $calculadora->calcula($reforma, new ICPP());

  // Descontos

  echo "<br>Testes de Descontos<br>";

  $calculadoraDeDescontos = new calculadoraDeDescontos();

  echo "Desconto<br>";

  $reforma->addItem(new Item("Tijolo", 250));
  $reforma->addItem(new Item("Cimento 1kg", 250));
  $reforma->addItem(new Item("Cimento 1kg", 250));
  $reforma->addItem(new Item("Cimento 1kg", 250));

  echo $calculadoraDeDescontos->desconto($reforma);

?>
