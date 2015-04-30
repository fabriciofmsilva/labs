public class Fatorial2 {
  public static void main(String[] args) {
    long fatorial = 1L;
    for(int i = 1; i <= 20; i++) {
      fatorial = fatorial * i;
      System.out.println("fat(" + i + ") = " + fatorial);
    }
  }
}
