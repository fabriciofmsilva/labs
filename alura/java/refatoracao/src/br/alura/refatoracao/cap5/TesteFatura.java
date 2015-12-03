package br.alura.refatoracao.cap5;

public class TesteFatura {

	public static void main(String[] args) {
		
		Fatura fatura = new Fatura();
		double valor1 = fatura.emReal();
		double valor2 = fatura.emDolar();
	}
	
}
