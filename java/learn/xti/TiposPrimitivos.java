/**
 * Apresentar os conceitos de Variável
 * @author Fabrício Silva
 */
public class TiposPrimitivos {
  public static void main (String[] args) {
    int idade = 29;
    double preco = 12.45;
    char sexo = 'M'; // Unicode
    boolean casado = false;

    byte b = 127; // cem
    short s = 32767; // 32 mil
    int i = 2000000000; // 2 bilhões
    long l = 9000000000000000L; // 9 quintilhões
    // IEEE 754
    double d = 1.7976931348623157E+308;
    float f = 123F;

    byte bb = 0b01010101; // 8 bits / 1 byte
    short ss = 0b0101010101010101; // 16 bits / 2 bytes
    int ii = 0b01010101010101010101010101010101; // 32 bits / 4 bytes

    System.out.println(ii);

    i = s; // Cast Implícito
    System.out.println(s);
    System.out.println(i);

    i = (int) l; // Cast Explícito
    System.out.println(l);
    System.out.println(i);
  }
}
