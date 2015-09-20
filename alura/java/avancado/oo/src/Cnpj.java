
public class Cnpj {
	
	private String cnpj;
	
	public Cnpj(String valor) {
		this.cnpj = valor;
	}
	
	public boolean ehValido() {
		return primeiroDigitoVerificador() == primeiroDigitoCorreto()
				&& segundoDigitoVerificador() == segundoDigitoCorreto();
	}

	private Object segundoDigitoVerificador() {
		// TODO Auto-generated method stub
		return 2;
	}

	private Object segundoDigitoCorreto() {
		// TODO Auto-generated method stub
		return 2;
	}

	private Object primeiroDigitoVerificador() {
		// TODO Auto-generated method stub
		return 1;
	}

	private Object primeiroDigitoCorreto() {
		// TODO Auto-generated method stub
		return 1;
	}

	public String getValor() {
		return cnpj;
	}

	public void setValor(String cnpjCredor) {
		// TODO Auto-generated method stub
		
	}
	
}
