<?php
  class EnviadorDeEmail implements AcaoAposGerarNota {

    public function executa(NotaFiscal $nf) {
      echo "Enviando nota fiscal por email<br />";
    }

  }
?>
