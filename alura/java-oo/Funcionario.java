abstract class Funcionario {
  private String nome;
  protected double salario;

  public void setSalario(double salario) {
    this.salario = salario;
  }

  abstract public double getBonus();

  public String getNome() {
    return nome;
  }
}

class Gerente extends Funcionario {
  public double getBonus() {
    return this.salario * 0.3;
  }

  public void cobraEntrega() {
    System.out.println("Está pronto?");
  }
}

class Desenvolvedor extends Funcionario {
  public double getBonus() {
    return this.salario * 0.25;
  }
}

class TotalizadorDeBonus {
  private double total = 0;

  public void adiciona(Funcionario f) {
    total += f.getBonus();
  }

  public double getTotal() {
    return this.total;
  }
}

class TestaFunctionario {
  public static void main(String[] args) {

    Gerente joaquim = new Gerente();
    joaquim.setSalario(2000.0);
    joaquim.cobraEntrega();
    System.out.println(joaquim.getBonus());

    TotalizadorDeBonus totalizador = new TotalizadorDeBonus();
    totalizador.adiciona(joaquim);
    System.out.println(totalizador.getTotal());
  }
}
