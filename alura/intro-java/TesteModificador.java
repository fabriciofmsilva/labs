class TesteModificador {
  public static void main(String[] args) {
    Conta2 joao = new Conta2();
    joao.numero = 123;
    joao.setLimite(100);

    joao.deposita(500.0);
    joao.saca(600.0);

    // joao.saldo -= 100;

    System.out.println(joao.getSaldo());
  }
}
