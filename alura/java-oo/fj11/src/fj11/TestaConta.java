package fj11;

public class TestaConta {
	public static void main(String[] args) {
		Conta conta = new Conta("Mauricio", 123, 400.5);
		conta.setNome("Mauricio");
		conta.imprime();

		System.out.println(conta.getNome());
	}
}
