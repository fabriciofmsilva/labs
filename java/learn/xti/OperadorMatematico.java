/**
 * Apresentar os conceitos de Operações Matemáticas
 * @author Fabrício Silva
 */

public class OperadorMatematico {
  public static void main(String[] args) {
    double soma = 7 + 3;
    System.out.println(soma);

    double multiplicacao = 7 * 3;
    System.out.println(multiplicacao);

    double subtracao = 7 - 3;
    System.out.println(subtracao);

    double divisao = 7 / 3;
    System.out.println(divisao);

    double modulo = 7 % 3;
    System.out.println(modulo);

    double positivo = +3;
    System.out.println(positivo);

    double negativo = -3;
    System.out.println(negativo);

    int x = 3;
    int incremento = x++;
    System.out.println("x = " + x);
    System.out.println("incremento = " + incremento);

    int y = 3;
    int decremento = --y;
    System.out.println("y = " + y);
    System.out.println("decremento = " + decremento);
  }
}
