public class TestaMerge {

  public static void main(String[] args) {
    Nota[] notasDoMauricio = {
      new Nota("andre", 4),
      new Nota("mariana", 5),
      new Nota("carlos", 8.5),
      new Nota("paulo", 9)
    };

    Nota[] notasDoAlberto = {
      new Nota("jonas", 3),
      new Nota("juliana", 6.7),
      new Nota("guilherme", 7),
      new Nota("lucia", 9.3),
      new Nota("ana", 10)
    };

    Nota[] rank = junta(notasDoMauricio, notasDoAlberto);

    for(Nota nota : rank) {
      System.out.println(nota.getAluno());
    }

  }

  private static junta(Nota[] notas1, Nota[] notas2) {
    return null;
  }

}
