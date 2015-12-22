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
      Historico historico = new Historico();
      Contrato c = new Contrato(DataTime.Now, "Victor", TipoContrato.Novo);
      historico.Adiciona(c.SalvaEstado());

      c.Avanca();
      historico.Adiciona(c.SalvaEstado());

      c.Avanca();
      historico.Adiciona(c.SalvaEstado());

      Console.WriteLine(historico.Pega(0).Contrato.Tipo);

    }
  }
}
