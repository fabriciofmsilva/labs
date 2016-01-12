using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class ImpressoraVisitor : IVisitor
  {
    public void ImpremeSoma(Soma soma)
    {
      Console.Write("(");
      soma.Esquerda.Aceita(this);
      Console.Write("+");
      soma.Direita.Aceita(this);
      Console.Write(")");
    }

    public void ImpremeSubtracao(Subtracao subtracao)
    {
      Console.Write("(");
      subtracao.Esquerda.Aceita(this);
      Console.Write("-");
      subtracao.Direita.Aceita(this);
      Console.Write(")");
    }

    public void ImpremeNumero(Numero numero)
    {
      Console.Write(numero.Valor);
    }
  }
}
