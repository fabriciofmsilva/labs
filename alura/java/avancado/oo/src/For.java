
public class For {
	public void percorreColecao(Iteravel colecao) {
		Iterador sequencia = colecao.percorrerColecao();
		Iteravel primeiro = (Iteravel) sequencia.proximo();
		Iteravel segundo = (Iteravel) sequencia.proximo();
	}
}
