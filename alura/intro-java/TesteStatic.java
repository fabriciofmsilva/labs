class TesteStatic {
  public static void main(String[] args) {

    Conta2 joao = new Conta2();
    System.out.println(joao.getNumero());

    Conta2 jose = new Conta2();
    System.out.println(jose.getNumero());

    System.out.println(Conta2.x());
  }
}
