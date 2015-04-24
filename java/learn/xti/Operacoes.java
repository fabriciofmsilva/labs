/**
 * Apresentar os conceitos de Operações
 * @author Fabrício Silva
 */

import java.util.Scanner;

public class Operacoes {
  public static void main(String[] args) {

    Scanner s = new Scanner(System.in);
    System.out.println("Informe o Raio");
    double raio = s.nextDouble();

    // Diâmetro : 2r
    // double raio = 10;
    double diametro = 2 * raio;
    System.out.println("Diâmetro = " + diametro);

    // Circunferência : 2PIr
    double pi = Math.PI;
    double circunferencia = 2 * pi * raio;
    System.out.println("Circunferência = " + circunferencia);

    // Área : PIr2
    double area = pi * (raio * raio);
    System.out.println("Área = " + area);

  }
}
