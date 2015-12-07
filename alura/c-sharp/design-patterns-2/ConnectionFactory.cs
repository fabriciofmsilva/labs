using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class ConnectionFactory
  {
    public IDbConnection GetConnection()
    {
      IDbConnection conexao = new SqlConnection();
      // conexao.ConnectionString = "User Id=root; Password=; Server=localhost; Database=meuBanco;";
      conexao.ConnectionString = new LeitorDeConfiguracao().leConnectionString();
      conexao.Open();

      return conexao;
    }
  }
}
