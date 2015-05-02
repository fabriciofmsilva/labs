class Funcionario {
  String nome;
  String departamento;
  double salario;
  Data dataEntrada;
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
    System.out.println("Dia: " + this.dataEntrada.dia);
    System.out.println("Mês: " + this.dataEntrada.mes);
    System.out.println("Ano: " + this.dataEntrada.ano);
    System.out.println("Data de entrada: " + this.dataEntrada.getFormatada());
    System.out.println("RG: " + this.rg);
    System.out.println("Salario atual: " + this.salario);
    System.out.println("Ganho Anual: " + this.calculaGanhoAnual());
  }
}

class Data {
  int dia;
  int mes;
  int ano;

  void preencheData (int dia, int mes, int ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  String getFormatada() {
    return this.dia + "/" + this.mes + "/" + this.ano;
  }
}

class TestaFuncionario {
  public static void main(String[] args) {
    Funcionario f1 = new Funcionario();

    f1.nome = "Hugo";
    f1.salario = 100;
    f1.recebeAumento(50);
    f1.departamento = "TI";

    f1.dataEntrada = new Data();
    f1.dataEntrada.preencheData(1, 5, 2015);

    f1.rg = "123456789";
    f1.mostra();
  }
}

class ComparaFuncionarios {
  public static void main(String[] args) {
    Funcionario f1 = new Funcionario();
    f1.nome = "Danilo";
    f1.salario = 100;

    // Funcionario f2 = new Funcionario();
    // f2.nome = "Danilo";
    // f2.salario = 100;

    Funcionario f2 = f1;

    if(f1 == f2) {
      System.out.println("iguais");
    } else {
      System.out.println("diferentes");
    }
  }
}
