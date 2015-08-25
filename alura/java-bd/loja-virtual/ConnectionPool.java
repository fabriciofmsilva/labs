import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.hsqldb.jdbc.JDBCPool;

public class ConnectionPool {

  private DataSource dataSource;

  Database() {
    JDBCPool pool = new JDBCPool();
    pool.setUrl("jdbc:hsqldb://localhost/loja-virtual");
    pool.setUser("SA");
    pool.setPassword("");
    this.dataSource = pool;
  }

  Connection getConnection() throws SQLException {
//    Connection connection = DriverManager.getConnection("jdbc:hsqldb://localhost/loja-virtual", "SA", "");
    Connection connection = dataSource.getConnection();
    return Connection;
  }

}
