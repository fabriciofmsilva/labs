<?php
  class NotaFiscalBuilder {
    private $empresa;
    private $cnpj;
    private $itens;
    private $valorBruto;
    private $impostos;
    private $observacoes;
    private $dataDeEmissao;

    private $acoesAoGerar;

    function __construct() {
      $this->valorBruto = 0;
      $this->impostos = 0;
      $this->itens = array();
      $this->acoesAoGerar = array();
    }

    public function addAcao(acoesAoGerarNota $acao) {
      $this->acoesAoGerar[] = $acao;
    }

    public function comEmpresa($nomeEmpresa) {
      $this->empresa = $nomeEmpresa;
    }

    public function comCnpj($nCnpj) {
      $this->cnpj = $nCnpj;
    }

    public function addItem(Item $novoItem) {
      $this->itens[] = $novoItem;
      $this->valorBruto += $novoItem->getValor();
      $this->impostos += $novoItem->getValor() * 0.2;
    }

    public function comObservacao($obs) {
      $this->observacoes = $obs;
    }

    public function naData($data = null) {
      if(is_null($data)) {
        $this->dataDeEmissao = date("Y-m-d h:i:s");
      } else {
        $this->dataDeEmissao = $data;
      }
    }

    public function build() {
      $nf = new NotaFiscal($this->empresa, $this->cnpj, $this->itens, $this->valorBruto, $this->impostos, $this->observacoes, $this->dataEmissao);

      foreach($this->acoesAoGerar as $acao) {
        $acao->executa($nf);
      }

      return $nf;
    }
  }
?>
