/**
 * Calcular o IMC
 * IMC = pesoEmQuilogramas / (alturaEmMetros * alturaEmMetros)
 */

import javax.swing.JOptionPane;

public class IMC {

  public static void main(String[] args) {

    String peso = JOptionPane.showInputDialog("Qual seu peso em quilogramas?");
    String altura = JOptionPane.showInputDialog("Qual sua altura em metros?");

    double pesoEmQuilogramas = Double.parseDouble(peso);
    double alturaEmMetros = Double.parseDouble(altura);
    double imc = pesoEmQuilogramas / (alturaEmMetros * alturaEmMetros);

    String msg = (imc >= 20 && imc <= 25) ? "Peso Ideal" : "Fora do Peso Ideal";
    msg = "IMC = " + imc + "\n" + msg;

    // System.out.println("IMC = " + imc);
    // System.out.println(msg);
    JOptionPane.showMessageDialog(null, msg);
  }

}
