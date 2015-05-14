public class TestaConta {
  public static void main(String[] args) {
    ContaCorrente c = new ContaCorrente();
    ContaCorrente cc = new ContaCorrente();
    ContaPoupanca cp = new ContaPoupanca();

    c.deposita(1000);
    cc.deposita(1000);
    cp.deposita(1000);

    c.atualiza(0.01);
    cc.atualiza(0.01);
    cp.atualiza(0.01);

    System.out.println(c.getSaldo());
    System.out.println(cc.getSaldo());
    System.out.println(cp.getSaldo());
    System.out.printf("O saldo é: %.2f\n", cp.getSaldo());
  }
}
