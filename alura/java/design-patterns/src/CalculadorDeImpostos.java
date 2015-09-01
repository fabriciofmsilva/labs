public class CalculadorDeImpostos {

  public void realizaCalculo(Orcamento orcamento, Imposto estrategiaDeImposto) {
    double resultado = estrategiaDeImposto.calcula(orcamento);
    System.out.println(resultado);
  }

}
