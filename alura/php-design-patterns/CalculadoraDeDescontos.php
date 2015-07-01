<?php
  require_once "DescontoPorCincoItens.php";
  require_once "DescontoPorMaisDeQuinhentosReais.php";
  require_once "DescontoPorVendaCasada.php";
  require_once "Desconto300Reais.php";
  require_once "SemDesconto.php";

  class CalculadoraDeDescontos {
    public function desconto(Orcamento $orcamento) {
      $DescontoPorCincoItens = new DescontoPorCincoItens();
      $DescontoPorMaisDeQuinhentosReais = new DescontoPorMaisDeQuinhentosReais();
      $DescontoPorVendaCasada = new DescontoPorVendaCasada();
      $desconto300Reais = new Desconto300Reais();
      $semDesconto = new SemDesconto();

      $DescontoPorCincoItens->setProximo($DescontoPorMaisDeQuinhentosReais);
      $DescontoPorMaisDeQuinhentosReais->setProximo($DescontoPorVendaCasada);
      $DescontoPorVendaCasada->setProximo($desconto300Reais);
      $desconto300Reais->setProximo($semDesconto);

      $valorDoDesconto = $DescontoPorCincoItens->desconta($orcamento);

      return $valorDoDesconto;
    }
  }
?>
