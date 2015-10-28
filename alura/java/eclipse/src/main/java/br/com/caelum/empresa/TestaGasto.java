package br.com.caelum.empresa;

import java.util.Calendar;
import java.util.GregorianCalendar;

import br.com.caelum.empresa.modelo.Funcionario;
import br.com.caelum.empresa.modelo.Gasto;

public class TestaGasto {
	public static void main(String[] args) {
		Calendar dataNascimento = new GregorianCalendar(1989, 3, 14);
		Funcionario funcionario = new Funcionario("Vinicius", 9, dataNascimento);
		Calendar hoje = Calendar.getInstance();
		
		Gasto gasto1 = new Gasto(40.00, "Taxi", funcionario, hoje);
		Gasto gasto2 = new Gasto(40.00, "Taxi", funcionario, hoje);
		Gasto gasto3 = new Gasto(40.00, "Taxi", funcionario, hoje);
		
		System.out.println(gasto1);
		System.out.println(gasto2);
		System.out.println(gasto3);
	}
}
