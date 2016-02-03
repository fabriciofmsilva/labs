package br.com.caelum.vraptor.controller;

import java.util.List;

import javax.inject.Inject;
import javax.validation.Valid;

import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.dao.ProdutoDao;
import br.com.caelum.vraptor.model.Produto;
import br.com.caelum.vraptor.simplemail.Mailer;
import br.com.caelum.vraptor.validator.Validator;
import br.com.caelum.vraptor.view.Results;

@Controller
public class ProdutoController {
	
	private final Result result;
	private final ProdutoDao dao;
	private final Validator validator;
	private final Mailer mailer;
	
	@Inject
	public ProdutoController(Result result, ProdutoDao dao, Validator validator, Mailer mailer) {
		this.result = result;
		this.dao = dao;
		this.validator = validator;
		this.mailer = mailer;
	}
	
	public ProdutoController() {
		this(null, null, null, null);
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
	public void adiciona(@Valid Produto produto) {
		
		validator.onErrorForwardTo(this).formulario();

		dao.adiciona(produto);
		result.include("mensagem", "Produto adicionado com sucesso!");
		result.redirectTo(this).lista();
	}

	@Post
	public void remove(Produto produto){
	    dao.remove(produto);
	}
	
	@Get
	public void enviaPedidoDeNovosItens(Produto produto) throws EmailException {
		Email email = new SimpleEmail();
		email.setSubject("Precisamos de mais estoque");
		email.setMsg("O produto " + produto.getNome() + " está em falta no estoque");
		email.addTo("curso-alura-vraptor4@gmail.com");
		mailer.send(email);
		result.redirectTo(this).lista();
	}
	
}
