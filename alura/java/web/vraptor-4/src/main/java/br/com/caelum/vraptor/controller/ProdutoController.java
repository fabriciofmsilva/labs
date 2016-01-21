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
	private final ProdutoDao dao;
	
	@Inject
	public ProdutoController(Result result, ProdutoDao dao) {
		this.result = result;
		this.dao = dao;
	}
	
	public ProdutoController() {
		this(null, null);
	}

	@Get("/")
	public void inicio() {
	}

	@Get
	public void lista() {
		result.include("produtoList", dao.lista());
	}

	@Get
	public void listaXML() {
		List<Produto> lista = dao.lista();
		result.use(Results.xml()).from(lista).serialize();
	}

	@Get
	public void formulario() {
		
	}
	
	@Post
	public void adiciona(Produto produto) {
		dao.adiciona(produto);
		result.include("mensagem", "Produto adicionado com sucesso!");
		result.redirectTo(this).lista();
	}

	@Post
	public void remove(Produto produto){
	    dao.remove(produto);
	}
	
}
