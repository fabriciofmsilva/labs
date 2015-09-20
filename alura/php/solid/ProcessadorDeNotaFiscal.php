<?php
  class ProcessadorDeNotaFiscal {

    public function Processa(NotaFiscal $nf) {

      if($nf->getValorSemImposto() > 10000) {
        $valor = 0.06 * $nf->getValor();
      } else {
        $valor = 0.12 * $nf->getValor():
      }

    }
  }
?>
