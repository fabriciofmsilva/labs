abstract class Funcionario {
  private String nome;
  protected double salario;

  public void setSalario(double salario) {
    this.salario = salario;
  }

  public abstract double getBonus();

  public String getNome() {
    return nome;
  }
}

class Gerente extends Funcionario implements Autenticavel {
  public double getBonus() {
    return this.salario * 0.3;
  }

  public void cobraEntrega() {
    System.out.println("Está pronto?");
  }

  @Override
  public boolean autentica(int senha) {
    return false; // regra aqui
  }
}

class Diretor extends Funcionario implements Autenticavel {
  public double getBonus() {
    return this.salario * 0.35;
  }

  public void cobraRelatorios() {
    System.out.println("Preciso dos relatórios!");
  }

  @Override
  public boolean autentica(int senha) {
    // implementamos a regra aqui
    return false;
  }
}

class Desenvolvedor extends Funcionario {
  public double getBonus() {
    return this.salario * 0.25;
  }
}

class DBA extends Funcionario {
  public double getBonus() {
    return this.salario * 0.1;
  }
}

// public abstract class FuncionarioAutenticavel extends Funcionario {
//   private int senha;

//   public boolean autentica(int senha) {
//     return this.senha == senha;
//   }
// }

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
