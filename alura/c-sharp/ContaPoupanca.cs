using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class ContaPoupanca : Conta
  {

    public override void Sava(double valor)
    {
      this.Saldo -= valor + 0.1;
    }

    public void CalculaInvestimento()
    {
    }

  }
}
