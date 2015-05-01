class Funcionario {
  String nome;
  String departamento;
  double salario;
  String dataDeEntrada;
  String rg;

  void recebeAumento(double aumento) {
    this.salario += aumento;
  }

  double calculaGanhoAnual() {
    return this.salario * 12;
  }

  void mostra() {
    System.out.println("Nome: " + this.nome);
    System.out.println("Departamento: " + this.departamento);
    System.out.println("Salário: " + this.salario);
    System.out.println("Data de Entrada: " + this.dataDeEntrada);
    System.out.println("RG: " + this.rg);
    System.out.println("Salario atual: " + this.salario);
    System.out.println("Ganho Anual: " + this.calculaGanhoAnual());
  }
}

class TestaFuncionario {
  public static void main(String[] args) {
    Funcionario f1 = new Funcionario();

    f1.nome = "Hugo";
    f1.salario = 100;
    f1.recebeAumento(50);
    f1.departamento = "TI";
    f1.dataDeEntrada = "30/04/2015";
    f1.rg = "123456789";
    f1.mostra();
  }
}
