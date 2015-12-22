using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Historico
  {
    private IList<Estado> Estados = new List<Estado>();

    public void Adiciona(Estado estado)
    {
      this.Estados.Add(estado);
    }

    public Estado Pega(int indice)
    {
      return Estados[indice];
    }
  }
}
