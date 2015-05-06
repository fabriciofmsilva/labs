class Conta2 {
  int numero;
  Cliente titular;
  private double saldo;
  private double limite;

  private static int numeroIncremental = 1;

  public static int x() {
    return 2*2;
  }

  public Conta2(int numero, double limite) {
    this(numero, limite, 0);
  }

  public Conta2(int numero, double limite, double saldoInicial) {
    this.numero = numero;
    this.limite = limite;
    this.saldo = saldoInicial;
  }

  public Conta2() {
    this.numero = numeroIncremental;
    numeroIncremental++;
  }

  public int getNumero() {
    return this.numero;
  }

  public void saca(double valor) {
    if(valor > this.saldo + this.limite) {
      System.out.println("Saque inválido");
    } else {
      this.saldo = this.saldo - valor;
    }
  }

  public void deposita(double valor) {
    this.saldo = this.saldo + valor;
  }

  public double getSaldo() {
    return this.saldo;
  }

  public void setLimite(double novoLimite) {
    this.limite = novoLimite;
  }
}

class Cliente {
  String nome;
  String endereco;
}
