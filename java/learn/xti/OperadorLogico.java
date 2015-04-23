/**
 * Apresentar os conceitos de Operações Lógicas
 * @author Fabrício Silva
 */

public class OperadorLogico {
  public static void main(String[] args) {
    int x = 6;
    System.out.println((x >= 1) && (x <= 10));
    System.out.println((x >= 1) || (x <= 10));
    System.out.println(!(x >= 1));
  }
}
