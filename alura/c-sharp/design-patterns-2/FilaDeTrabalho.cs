using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class FilaDeTrabalho
  {
    private IList<IComando> Comandos = new List<IComando>();

    public void Adiciona(IComando comando)
    {
      this.Comandos.Add(comando);
    }

    public void Processa()
    {
      foreach(var comando in this.comandos)
      {
        comando.Executa();
      }
    }
  }
}
