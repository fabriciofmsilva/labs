<?php
  class CalculadoraDeImpostos {

    public function calcula(Orcamento $orcamento, Imposto $imposto) {
      $resultado = $imposto->calcula($orcamento);
      return $resultado;
    }

  }
?>
