<?php
  class NotaFiscalDAO implements AcoesAoGerarNota {
    public function executa(NotaFiscal $fn) {
      echo "<br />Eu mandei para o banco de dados<br />";
    }
  }
?>
