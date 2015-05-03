class Funcionario {
  private String nome;
  private String departamento;
  private double salario;
  private Data dataEntrada;
  private String rg;

  public void recebeAumento(double aumento) {
    this.salario += aumento;
  }

  public double getGanhoAnual() {
    return this.salario * 12;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getDepartamento() {
    return this.departamento;
  }

  public void setDepartamento(String departamento) {
    this.departamento = departamento;
  }

  public double getSalario() {
    return this.salario;
  }

  public void setSalario(double salario) {
    this.salario = salario;
  }

  public Data getDataEntrada() {
    return this.dataEntrada;
  }

  public void setDataEntrada(Data dataEntrada) {
    this.dataEntrada = dataEntrada;
  }

  public String getRg() {
    return this.rg;
  }

  public void setRg(String rg) {
    this.rg = rg;
  }

  public void mostra() {
    System.out.println("Nome: " + this.nome);
    System.out.println("Departamento: " + this.departamento);
    System.out.println("Salário: " + this.salario);
    System.out.println("Dia: " + this.dataEntrada.dia);
    System.out.println("Mês: " + this.dataEntrada.mes);
    System.out.println("Ano: " + this.dataEntrada.ano);
    System.out.println("Data de entrada: " + this.dataEntrada.getFormatada());
    System.out.println("RG: " + this.rg);
    System.out.println("Salario atual: " + this.salario);
    System.out.println("Ganho Anual: " + this.getGanhoAnual());
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

class Empresa {
  private Funcionario[] empregados;
  private String nome;
  private String cnpj;
  private int livre = 0;

  public Empresa(String nome, String cnpj) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.empregados = new Funcionario[10];
  }

  public String getCnpj() {
    return this.cnpj;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setCnpj(String cnpj) {
    this.cnpj = cnpj;
  }

  public void adiciona(Funcionario f) {
    this.empregados[this.livre] = f;
    this.livre++;
  }

  public void mostraEmpregados() {
    for(int i = 0; i < this.empregados.length; i++) {
      if(this.empregados[i] == null) continue;
      System.out.println("Funcionário na posição: " + i);
      System.out.println("R$" + this.empregados[i].salario);
    }
  }

  public void mostraTodasAsInformacoes() {
    for(int i = 0; i < this.empregados.length; i++) {
      if(this.empregados[i] == null) continue;
      System.out.println("Funcionário na posição: " + i);
      this.empregados[i].mostra();
    }
  }

  public boolean contem(Funcionario f) {
    for(int i = 0; i < this.livre; i++) {
      if(f == this.empregados[i]) {
        return true;
      }
    }
    return false;
  }

  public Functionario getFuncionario(int posicao) {
    return this.empregados[posicao];
  }
}

class TestaFuncionario {
  public static void main(String[] args) {
    Funcionario f1 = new Funcionario();

    f1.setNome("Hugo");
    f1.setSalario(100);
    System.out.println(f1.getSalario());
    f1.recebeAumento(50);
    f1.setDepartamento("TI");

    f1.setDataEntrada(new Data());
    //f1.setDataEntrada(dataEntrada.preencheData(1, 5, 2015));

    f1.setRg("123456789");
    f1.mostra();
  }
}
/*
class TesteEmpresa {
  public static void main(String[] args) {
    Empresa empresa = new Empresa();
    empresa.empregados = new Funcionario[10];

    Funcionario f1 = new Funcionario();
    f1.nome = "Fabrício";
    f1.salario = 1000;
    f1.departamento = "TI";
    f1.dataEntrada = new Data();
    f1.dataEntrada.preencheData(2, 5, 2015);
    f1.rg = "123456789";
    empresa.adiciona(f1);

    Funcionario f2 = new Funcionario();
    f2.nome = "Francisco";
    f2.salario = 1700;
    f2.departamento = "Adm";
    f2.dataEntrada = new Data();
    f2.dataEntrada.preencheData(2, 5, 2015);
    f2.rg = "123456789";
    empresa.adiciona(f2);

    empresa.mostraTodasAsInformacoes();

    // empresa.empregados[0].mostra();
    // empresa.empregados[1].mostra();

    // for(int 1 = 0; i < 5; i++) {
    //   Funcionario f = new Funcionario();
    //   f.salario = 1000 + i * 100;
    //   empresa.adiciona(f);
    // }
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
*/
