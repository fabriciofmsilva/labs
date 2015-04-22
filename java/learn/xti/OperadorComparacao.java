/**
 * Apresentar os conceitos de Operações de Comparação
 * @author Fabrício Silva
 */

public class OperadorComparacao {
  public static void main(String[] args) {
    int x = 6;

    System.out.println(x == 6);
    System.out.println(x == 7);

    System.out.println(x != 6);
    System.out.println(x != 7);

    System.out.println(x > 6);
    System.out.println(x > 7);

    System.out.println(x < 6);
    System.out.println(x < 7);

    System.out.println(x >= 6);
    System.out.println(x >= 7);

    System.out.println(x <= 6);
    System.out.println(x <= 7);

    // Integer y = new Integer(6); // Antes
    Integer y = 6;
    System.out.println(y instanceof Integer);
  }
}
