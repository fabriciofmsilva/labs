<?php
  class Finalizado implements TipoDeContrato {
    public function avanca(Contrato $Contrato) {
      throw new Exception("Este contrato já se encontra finalizado");
    }
  }
?>
