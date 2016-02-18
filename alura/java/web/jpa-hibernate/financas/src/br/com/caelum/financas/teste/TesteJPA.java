package br.com.caelum.financas.teste;

import javax.persistence.EntityManager;

import br.com.caelum.financas.modelo.Conta;
import br.com.caelum.financas.util.JPAUtil;

public class TesteJPA {

	public static void main(String[] args) {
		
		Conta conta = new Conta();
		conta.setId(7);
		conta.setTitular("Mario Santos");
		conta.setBanco("ITAU");
		conta.setNumero("54321");
		conta.setAgencia("3344");
		
		EntityManager em = new JPAUtil().getEntityManager();
		em.getTransaction().begin();
		
		Conta contaARemover = em.find(Conta.class, 7);
		
		em.remove(contaARemover);
		
		System.out.println(conta.getId());
		
		em.getTransaction().commit();
		em.close();
	}
}
