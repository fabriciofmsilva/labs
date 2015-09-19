<?php
  function carregaClasse($classe) {
    require $classe.".php";
  }

  spl_autoload_register("carregaClasse");

  // $dev = new Funcionario(new Desenvolvedor(new DezOuVintePorcento()), 3100);
  // $calculadora = new CalculadoraDeSalario();
  // echo $calculadora->calcula($dev);

  // $fatura = new Fatura();
  // $fatura->setValorMensal(1000);
  // $gerador = new GeradorNotaFiscal();
  // $gerador->addAcao(new EnviadorDeEmail());
  // $gerador->addAcao(new NotaFiscalDao());
  // $gerador->gera($fatura);

  $compra = new Compra(3000, "SAO PAULO");

  $calculadora = new CalculadorDePrecos(new TabelaDePrecoPadrao(), new Frete());

  echo $calculadora->calcula($compra);

?>
