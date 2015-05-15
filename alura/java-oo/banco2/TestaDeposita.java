public class TestaDeposita {
  public static void main(String[] args) {
    Conta cp = new Conta();
    try{
      cp.deposita(-100);
    } catch(ValorInvalidoException e) {
      System.out.println(e.getMessage());
    }
  }
}
