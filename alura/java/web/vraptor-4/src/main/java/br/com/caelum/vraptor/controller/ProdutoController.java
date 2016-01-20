package br.com.caelum.vraptor.controller;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.dao.ProdutoDao;
import br.com.caelum.vraptor.model.Produto;
import br.com.caelum.vraptor.util.JPAUtil;
import br.com.caelum.vraptor.view.Results;

@Controller
public class ProdutoController {
	
	private final Result result;
	
	@Inject
	public ProdutoController(Result result) {
		this.result = result;
	}
	
	public ProdutoController() {
		this(null);
	}

	@Get("/")
	public void inicio() {
	}

	@Get
	public void lista() {
		EntityManager em = JPAUtil.criaEntityManager();
		ProdutoDao produtoDao = new ProdutoDao(em);
		List<Produto> lista = produtoDao.lista();
		result.include("produtoList", lista);
	}

	@Get
	public void listaXML() {
		EntityManager em = JPAUtil.criaEntityManager();
		ProdutoDao produtoDao = new ProdutoDao(em);
		List<Produto> lista = produtoDao.lista();
		result.use(Results.xml()).from(lista).serialize();
	}

	@Get
	public void formulario() {
		
	}
	
	@Post
	public void adiciona(Produto produto) {
		EntityManager em = JPAUtil.criaEntityManager();
		ProdutoDao produtoDao = new ProdutoDao(em);
		em.getTransaction().begin();
		produtoDao.adiciona(produto);
		em.getTransaction().commit();
		result.include("mensagem", "Produto adicionado com sucesso!");
		result.redirectTo(this).lista();
	}

	@Post
	public void remove(Produto produto){
	    EntityManager em = JPAUtil.criaEntityManager();
	    ProdutoDao dao = new ProdutoDao(em);
	    em.getTransaction().begin();
	    dao.remove(produto);
	    em.getTransaction().commit();
	}
	
}
