import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaRemovao {

  public static void main(String[] args) throws SQLException {
    Connection connection = Database.getConnection();
    Statement stmt = connection.createStatement();
    stmt.execute("delete from Produto where id>3");
    int count = stmt.getUpdateCount();
    System.out.println(count + " linhas atualizadas");

    stmt.close();
    connection.close();
  }
}
