import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestaListagem {

  public static void main(String[] args) throws SQLException {
    Connection connection = Database.getConnection();

    Statement statement = connection.createStatemet();
    boolean resultado = statement.execute("select * from Produto");
    ResultSet resultSet = statement.getResultSet();
    while(resultSet.next()) {
      int id = resultSet.getInt("id");
      String nome = resultSet.getString("nome");
      String descricao = resultSet.getString("descricao");

      System.out.println(id);
      System.out.println(nome);
      System.out.println(descricao);
    }
    resultSet.close();
    statement.close();

    System.out.println(resultado);

    connection.close();
  }
}
