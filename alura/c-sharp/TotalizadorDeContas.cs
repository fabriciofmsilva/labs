using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class TotalizadorDeContas
  {
    public double Total { get; private set; }

    public void Adiciona(Conta conta)
    {
      this.total += conta.Saldo;
    }
  }
}
