import java.util.Calendar;

public class Pagamento {

	private String pagador;
	private String cnpjPagador;
	private double valor;

	public String getPagador() {
		return pagador;
	}

	public void setPagador(String pagador) {
		this.pagador = pagador;
	}

	public String getCnpjPagador() {
		return cnpjPagador;
	}

	public void setCnpjPagador(String cnpjPagador) {
		this.cnpjPagador = cnpjPagador;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Calendar getData() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setDocumentoPagador(Cnpj cnpj) {
		// TODO Auto-generated method stub
		
	}

}
