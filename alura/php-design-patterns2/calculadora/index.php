<?php

  date_default_timezone_set("Brazil/East");

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

  $data = new Relogio();
  echo $data->getDia()."/".$data->getMes();
  echo "<br />";

  $soma->aceita($impressora);

  echo " = ";

  echo $soma->avalia();

  $mapa = new GoogleMaps();

  echo $mapa->getMapa();

?>
