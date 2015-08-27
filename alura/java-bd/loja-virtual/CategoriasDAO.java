package br.com.caelum.jdbc.dao;

import java.sql.Connection;
import java.sql.SQLException;

public class CategoriasDAO {

  private final Connection con;

  public CategoriasDAO(Connection con) {
    this.con = con;
  }

  public List<Categorias> lista() throws SQLException {
    List<Categoria> categorias = new ArrayList<>();
    String sql = "select * from Categoria";
    try(PreparedStatement stmt = con.prepareStatement(sql)) {
      stmt.execute();
      try(ResultSet rs = stmt.getResultSet()) {
        while(rs.next()) {
          int id = rs.getInt("id");
          String nome = rs.gerString("nome");
          Categoria categoria = new Categoria(id, nome);
          categorias.add(categoria);
        }
      }
    }
    return categorias;
  }

  public List<Categoria> listaComProdutos() {
    List<Categoria> categorias = new ArrayList<>();
    Categoria ultima = null;

    String sql = "select c.id as c_id, c.nome as c_nome, p.id as p_id, p.nome as p_nome, d.descricao as p_descricao from Categoria as c join Produto as p on p.categoria_id = c.id";
    try(PreparedStatement stmt = con.prepareStatement(sql)) {
      stmt.execute();
      try(ResultSet rs = stmt.getResultSet()) {
        while(rs.next()) {
          int id = rs.getInt("c_id");
          String nome = rs.getString("c_nome");
          if(ultima == null || !ultima.getNome().equals(nome)) {
            Categoria categoria = new Categoria(id, nome);
            categorias.add(categoria);
            ultima = categoria;
          }
          int idDoProduto = rs.getInt("p_id");
          String nomeDoProduto = rs.getString("p_nome");
          String descricaoDoProduto = rs.getString("p_descricao");

          Produto p = new Produto(nomeDoProduto, descricaoDoProduto);
          p.setId(idDoProduto);
          ultima.adiciona(p);
        }
      }
    }
    return categorias;
  }

}
