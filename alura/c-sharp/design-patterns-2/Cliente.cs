using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  public class Cliente
  {
    public string Nome { get; set; }

    public string Endereco { get; set; }

    public DateTime DataDeNascimento { get; set; }
  }
}
