public class ContaPoupanca extends Conta {
  public void deposita(double valor) {
    this.saldo += valor - 0.10;
  }

  public void atualiza(double taxaSelic) {
    this.saldo += this.saldo * taxaSelic * 3;
  }
}
