public class TestaEncontraMenores {

  public static void main(String[] args) {
    Nota guilherme = new Nota("guilherme", 7);
    Nota[] notas = {
      new Nota("andre", 4),
      new Nota("mariana", 5),
      new Nota("carlos", 8.5),
      new Nota("paulo", 9),
      new Nota("jonas", 3),
      new Nota("juliana", 6.7),
      guilherme,
      new Nota("lucia", 9.3),
      new Nota("ana", 10)
    };

    int menores = encontraMenores(guilherme, notas);
    System.out.println("Números de menores: " + menores);
  }

  private static int encontraMenores(Nota busca, Nota[] notas) {
    int menores = 0;

    for(int atual = 0; atual < notas.length; atual++) {
      Nota nota = notas[atual];
      if(nota.getValor() < busca.getValor()) {
        menores++;
      }
    }
    return menores;
  }

}
