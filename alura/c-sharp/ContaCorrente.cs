using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class ContaCorrente : Conta
  {

    public override void Saca(double valor)
    {
      this.Saldo -= valor;
    }

  }
}
