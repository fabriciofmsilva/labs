public class TesteDeDescontos {

  public static void main(String[] args) {
    CalculadorDeDescontos descontos = new CalculadorDeDescontos();

    Orcamento orcamento = new Orcamento(600.0);
    orcamento.adicionaItem(new Item("CANETA", 300.0));
    orcamento.adicionaItem(new Item("LAPIS", 300.0));

    double descontoFinal = descontos.calcula(orcamento);

    System.out.println(descontoFinal);
  }

}
