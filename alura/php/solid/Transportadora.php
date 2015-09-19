<?php
  class Trasportadora implements ServicoDeEntrega {

    public function para($cidade) {

      if(strtolower($cidade) == "sao paulo") {
        return 5;
      }

      return 10;
    }

  }
?>
