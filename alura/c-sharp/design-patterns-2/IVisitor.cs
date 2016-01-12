using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  interface IVisitor
  {
    void ImprimeSoma(Soma soma);

    void ImprimeSubtracao(Subtracao subtracao);

    void ImprimeNumero(Numero numero);
  }
}
