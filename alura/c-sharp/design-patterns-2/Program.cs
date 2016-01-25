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
      String cpf = "1234";

      EmpresaFacade facade = new EmpresaFacadeSingleton().Instancia;
      Cliente cliente = facade.BuscaCliente(cpf);

      var fatura = facade.CriaFatura(cliente, 5000);
      facade.GeraCobranca(Tipo.Boleto, fatura);
    }
  }
}
