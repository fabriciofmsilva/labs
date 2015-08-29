using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class TotalizadorDeTributos
  {
    public double Total { get; private set; }

    public void Acumula(Tributavel cp)
    {
      this.Total += cp.CalculaTributo();
    }
  }
}
