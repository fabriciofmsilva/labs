
public class Cpf implements Documento {
	private final String valor;
	
	public Cpf(String valor) {
		this.valor = valor;
	}
	
	public String getValor() {
		return valor;
	}
	
	@Override
	public String toString() {
		return valor;
	}
	
	@Override
	public boolean equals(Object o) {
		if(!(o instanceof Cpf)) {
			return false;
		}
		Cpf outro = (Cpf) o;
		return this.valor.equals(outro.valor);
	}
	
	@Override
	public int hashCode() {
		return this.valor.hashCode();
	}
	
	public boolean ehValida() {
		return primeiroDigitoVerificadorCorreto()
				&& segundoDigitoVerificadorCorreto();
	}

	private boolean segundoDigitoVerificadorCorreto() {
		// TODO Auto-generated method stub
		return false;
	}

	private boolean primeiroDigitoVerificadorCorreto() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean ehValido() {
		// TODO Auto-generated method stub
		return false;
	}
}
