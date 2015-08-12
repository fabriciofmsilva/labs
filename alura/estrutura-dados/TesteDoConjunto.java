import java.util.HashSet;
import java.util.Set;

public class TesteDoConjunto {

  public static void main(String[] args) {

    Conjunto conjunto = new Conjunto();
    conjunto.adiciona("Maurício");
    System.out.println(conjunto);

    conjunto.adiciona("Maurício");
    System.out.println(conjunto);

    conjunto.adiciona("Marcelo");
    conjunto.adiciona("Guilherme");
    System.out.println(conjunto);

    conjunto.remove("Maurício");
    System.out.println(conjunto);

    Set<String> conjuntoDoJava = new HashSet<String>();
    conjuntoDoJava.add("Maurício");
    conjuntoDoJava.add("Paulo");
    System.out.println(conjuntoDoJava);

    String x = "Guilherme";
    x.hashCode();

    System.out.println("Guilherme".hashCode());

  }

}
