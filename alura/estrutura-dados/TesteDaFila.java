import java.util.Queue;
import java.util.LinkedList;
import java.util.List;

public class TesteDaFila {
  public static void main(String[] args) {

    Fila fila = new Fila();

    fila.adiciona("Maurício");
    fila.adiciona("Guilherme");

    System.out.println(fila);

    String x1 = fila.remove();

    System.out.println(x1);
    System.out.println(fila);

    Queue<String> filaDoJava = new LinkedList<String>();

    filaDoJava.add("Maurício");
    String x2 = filaDoJava.poll();

    System.out.println(x2);

  }
}
