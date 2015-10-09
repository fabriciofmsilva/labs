package br.com.caelum.online.loja.controlador;

import java.util.List;

import br.com.caelum.online.loja.dao.ProdutoDao;
import br.com.caelum.online.loja.dominio.Produto;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

@Resource
public class ProdutoController {

	private final ProdutoDao produtos;
	private final Result result;

	public ProdutoController(Result result) {
		this.result = result;
		this.produtos = new ProdutoDao();
	}
	
	public void formulario() {
		
	}
	
	@Post
	public void adiciona(Produto produto) {
		produtos.salva(produto);
		result.include("mensagem", "Novo produto adicionado com sucesso!");
		result.redirectTo(ProdutoController.class).lista();
	}
	
	public List<Produto> lista() {
		return produtos.pegaTodos();
	}
	
	@Path("/produto/{id}")
	public Produto exibe(Long id) {
		return produtos.pegaPorId(id);
	}

	@Path("/produto/{id}/xml")
	public void exibeComoXML(Long id) {
		Produto produto = produtos.pegaPorId(id);
		result.use(Results.xml()).from(produto).serialize();
	}

	@Path("/produto/{id}/json")
	public void exibeComoJSON(Long id) {
		Produto produto = produtos.pegaPorId(id);
		result.use(Results.json()).from(produto).serialize();
	}
	
}
