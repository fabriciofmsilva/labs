using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class ContaInvestimento : Conta, Tributavel
  {

    public override void Saca(double valor)
    {
      this.Saldo -= valor;
    }

    public double CalculaTributo()
    {
      return this.Saldo * 0.03;
    }

  }
}
