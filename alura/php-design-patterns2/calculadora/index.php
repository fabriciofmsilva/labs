<?php

  function carregaClasse($classe) {
    require $classe.".php";
  }

  spl_autoload_register("carregaClasse");

  // 1
  // 1 + 3
  // (1 + 3) + (2 + 2)

  $esquerdo = new Soma(new Numero(1), new Numero(3));
  $direito = new Subtracao(new Numero(2), new Numero(2));

  $impressora = new Impressora();
  $soma = new Soma($esquerdo, $direito);

  $soma->aceita($impressora);

  echo " = ";

  echo $soma->avalia();
?>
