/**
 * Apresentar os conceitos de Operações
 * @author Fabrício Silva
 */

public class Operador {
  public static void main(String[] args) {
    // -2 operador unário
    // 2 + 3 operador binário
    // true ? "sim" : "não" operador ternário

    int x = 9 + 4;
    System.out.println(x);

    String y = "9" + "4";
    System.out.println(y);

    double pre = 7 - 4 + 3 * 2;
    System.out.println(pre);

    double pre2 = (7 - 4 + 3) * 2;
    System.out.println(pre2);
  }
}
