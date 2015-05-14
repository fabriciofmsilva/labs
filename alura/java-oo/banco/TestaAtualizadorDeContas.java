public class TestaAtualizadorDeContas {
  public static void main (String[] args) {
    ContaCorrente c = new ContaCorrente();
    ContaCorrente cc = new ContaCorrente();
    ContaPoupanca cp = new ContaPoupanca();

    c.deposita(1000);
    cc.deposita(1000);
    cp.deposita(1000);

    AtualizadorDeContas adc = new AtualizadorDeContas(0.01);

    adc.roda(c);
    adc.roda(cc);
    adc.roda(cp);

    System.out.println("Saldo Total: " + adc.getSaldoTotal());
  }
}
