<?php
  interface Desconto {
    public function setProximo(Desconto $proximo);
    public function desconta(Orcamento $orcamento);
  }
?>
