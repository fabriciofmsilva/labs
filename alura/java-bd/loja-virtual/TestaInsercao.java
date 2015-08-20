import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaInsercao {

  public static void main(String[] args) throws SQLException {
    Connection connection = Database.getConnection();
    Statement statement = connection.createStatement();
    boolean resultado = statement.execute("insert into Produto (nome, descricao) values('Notebook', 'Notebook i5'", Statement.RETURN_GENERATE_KEYS);
    System.out.println(resultado);

    ResultSet resultSet = statement.getGeneratedKeys();
    while(resultSet.next()) {
      String id = resultSet.getString("id");
      System.out.println(id + " gerado");
    }

    statement.close();
    connection.close();
  }

}
