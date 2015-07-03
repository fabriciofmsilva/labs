<?php
abstract class Filtro {
  protected $outroFiltro;

  function __construct($outroFiltro = null) {
    $this->outroFiltro = $outroFiltro;
  }

  public abstract function filtra($contas);

  protected function proximo($contas) {
    if(!is_null(outroFiltro)) {
      return $outroFiltro->filtra($contas);
    } else {
      return Array();
    }
  }
}

class FiltroMenorQue100Reais extends Filtro {
  function __construct($outroFiltro = null) {
    parent::__construct($outroFiltro);
  }

  public function filtra($contas) {
    $filtrada = new Array();

    foreach($contas as $c) {
      if($c->getValor() < 100) $filtrada[] = $c;
    }

    foreach(proximo(contas) as $c) {
      $filtrada[] = $c;
    }
    return filtrada;
  }
}

class FiltroMaiorQue500MilReais extends Filtro {
  function __construct($outroFiltro = null) {
    parent::__construct($outroFiltro);
  }

  public function filtra($contas) {
    $filtrada = Array();

    foreach($contas as $c) {
      if($c->getValor() > 50000) $filtrada[] = $c;
    }

    foreach(proximo(contas) as $c)  {
      $filtrada[] = $c;
    }
    return filtrada;
  }
}

class FiltroMesmoMes extends Filtro {
  function __construct($outroFiltro = null) {
    parent::__construct($outroFiltro);
  }

  public function filtra($contas) {
    $filtrada = Array();

    for($contas as $c) {
      if($c->getDataAbertura()->get("month") == date("m") &&
          $c->getDataAbertura().get("year") == date("Y")) {
        $filtrada[] = $c;
      }
    }

    foreach(proximo(contas) as $c)  {
      $filtrada[] = $c;
    }
    return filtrada;
  }
}
?>
