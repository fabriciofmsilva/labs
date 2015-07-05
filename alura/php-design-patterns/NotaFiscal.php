<?php
  class NotaFiscal {
    private $razaoSocial;
    private $cnpj;
    private $dataDeEmissao;
    private $valorBruto;
    private $impostos;
    private $itens;
    private $observacoes;

    function __construct($razaoSocial, $cnpj, $dataDeEmissao, $valorBruto, $impostos, $itens, $observacoes) {
      $this->razaoSocial = $razaoSocial;
      $this->cnpj = $cnpj;
      $this->dataDeEmissao = $dataDeEmissao;
      $this->valorBruto = $valorBruto;
      $this->impostos = $impostos;
      $this->itens = $itens;
      $this->observacoes = $observacoes;
    }

    public function getRazaoSocial() {
      return $this->razaoSocial;
    }

    public function getCnpj() {
      return $this->cnpj;
    }
  }
?>
