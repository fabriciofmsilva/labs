public class ICPP extends TemplateDeImpostoCondicional {

  @Override
  public abstract double minimaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * 0.05;
  }

  @Override
  public abstract double maximaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * 0.07;
  }

  @Override
  public abstract boolean deveUsarMaximaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() > 500;
  }

}
