using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Subtracao : IExpressao
  {
    private IExpressao esquerda;
    private IExpressao direita;

    public Subtracao(IExpressao esquerda, IExpressao direita)
    {
      this.esquerda = esquerda;
      this.direita = direita;
    }

    public int Avalia()
    {
      int valorEsqueda = esquerda.Avalia();
      int valorDireita = direita.Avalia();
      return valorEsquerda - valorDireita;
    }
  }
}
