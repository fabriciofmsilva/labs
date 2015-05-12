public class SistemaInterno {
  public void autentica(Autenticavel f) {
    int senha = 123; // no futuro, pegaremos do teclado

    if(f.autentica(senha) == true) {
      System.out.println("Bem-vindo ao sistema");
    }
    else {
      System.out.println("Senha incorreta");
    }
  }
}
