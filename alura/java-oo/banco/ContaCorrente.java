public class ContaCorrente extends Conta implements Tributavel {
  public void atualiza(double taxaSelic) {
    this.saldo += this.saldo * taxaSelic * 2;
  }

  public double calculaTributos() {
    return this.getSaldo() * 0.01;
  }
}
