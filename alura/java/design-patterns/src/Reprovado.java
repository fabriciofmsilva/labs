public class Reprovado implements EstadoDeUmOrcamento {

  @Override
  public void aplicaDescontoExtra(Orcamento orcamento) {
    throw new RuntimeException("Somente orcamento em aprovacao ou aprovados recebem desconto extra!");
  }

  @Override
  public void aprova(Orcamento orcamento) {
    throw new RuntimeException("Orçamento reprovados não podem ser aprovados!");
  }

  @Override
  public void reprova(Orcamento orcamento) {
    throw new RuntimeException("Orçamento já está reprovado!");
  }

  @Override
  public void finaliza(Orcamento orcamento) {
    orcamento.estadoAtual = new Finalizado();
  }

}
