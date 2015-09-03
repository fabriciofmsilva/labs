class IHIT extends TemplateDeImpostoCondicional {

  public boolean deveUsarMaximaTaxacao(Orcamento orcamento) {
    List<String> noOrcamento = new ArrayList<String>();

    for(Item item : orcamento.getItens()) {
      if(noOrcamento.contains(item.getNome())) {
        return true;
      } else {
        noOrcamento.add(item.getNome());
      }
    }

    return false;
  }

  public abstract double maximaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * 0.13 + 100;
  }

  public abstract double minimaTaxacao(Orcamento orcamento) {
    return orcamento.getValor() * (0.01 * orcamento.getItens().size());
  }
}
