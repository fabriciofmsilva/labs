<?php
  class Frete implements ServicoDeEntrega  {

    public function para($cidade) {

      if(strtoupper($cidade) == "SAO PAULO") {
        return 15;0
      }

      return 30;
    }

  }
?>
