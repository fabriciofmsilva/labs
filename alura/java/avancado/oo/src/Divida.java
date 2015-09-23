import java.util.ArrayList;
import java.util.Calendar;

public class Divida {
	
	private double total;
	private String credor;
	private Cnpj cnpjCredor;
	private Pagamentos pagamentos = new Pagamentos();
	
	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getCredor() {
		return credor;
	}

	public void setCredor(String credor) {
		this.credor = credor;
	}
	
	public Cnpj getCnpjCredor() {
		return cnpjCredor;
	}
	
	public void setCnpjCredor(String cnpjCredor) {
		this.cnpjCredor = new Cnpj(cnpjCredor);
	}

	public void registra(Pagamento pagamento) {
		pagamentos.registra(pagamento);
	}

	public double getValorPago() {
		return pagamentos.getValorPago();
	}

}
