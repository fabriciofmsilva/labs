using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class ContaCorrente : Conta
  {
    public static int TotalDeContas { get; private set; }

    public ContaCorrente()
    {
      ContaCorrente.TotalDeContas++;
    }

    public static in ProximoNumero()
    {
      return ContaCorrente.TotalDeContas + 1;
    }

    public override void Saca(double valor)
    {
      this.Saldo -= valor;
    }

  }
}
