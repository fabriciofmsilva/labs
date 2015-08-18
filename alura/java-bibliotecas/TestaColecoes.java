import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

// import br.com.caelum.fj11.modelo.Conta;

public class TestaColecoes {

  public static void main(String[] args) {
    // List<String> nomes = new LinkedList<String>();
    // nomes.add("Maurício");
    // nomes.add("Guilherme");

    // System.out.println(nomes.get(0));
    // System.out.println(nomes.contains("Guilherme"));

    // for(String nome : nomes) {
    //   System.out.println(nome);
    // }

    // Collections.sort(nomes);

    // for(String nome : nomes) {
    //   System.out.println(nome);
    // }

    Set<String> nomes = new HashSet<String>();
    nomes.add("Maurício");
    nomes.add("Guilherme");
    nomes.add("Guilherme");

    System.out.println(nomes.size());

    // ArrayList<Conta> contas = new ArrayList<Conta>();

    // Conta c1 = new Conta(1500.0);
    // Conta c2 = new Conta(700.0);
    // contas.add(c1);
    // contas.add(c2);

    // for(Conta c : contas) {
    //   System.out.println(c);
    // }

    // Collections.sort(contas);

    // System.out.println(contas.get(1));
  }

}
