using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Program
  {
    static void Main(string[] args)
    {
      Cliente cliente = new Cliente();

      cliente.Nome = "victor";
      cliente.Endereco = "Rua Vergueiro";
      cliente.DataDeNascimento = DateTime.Now;

      String xml = new GeradorDeXml().GeraXml(cliente);

      Console.WriteLine(xml);
    }
  }
}
