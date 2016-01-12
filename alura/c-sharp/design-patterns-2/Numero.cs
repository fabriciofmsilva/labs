using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Numero : IExpressao
  {
    private IExpressao numero;

    public int Valor {get; private set; };
    public Numero(int numero)
    {
      this.numero = numero;
    }

    public int Avalia()
    {
      return this.Valor;
    }

    public void Aceita(IVisitor impressora)
    {
      impressora.ImprimeNumero(this);
    }
  }
}
