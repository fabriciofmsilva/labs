public class IKCV extends TemplateDeImpostoCondicional {

  private boolean temItemMaiorQue100ReaisNo(Orcamento orcamento) {
    for(Item item : orcamento.getItens()) {
      if(item.getValor() > 100) {
        return true;
      }

      return false;
    }
  }

  @Override
  public abstract double minimaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * 0.06;
  }

  @Override
  public abstract double maximaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * 0.10;
  }

  @Override
  public abstract boolean deveUsarMaximaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() > 500 && temItemMaiorQue100ReaisNo(orcamento);
  }

}
