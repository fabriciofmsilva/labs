using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class Conta
  {
    public int numero;

    public double saldo;

    public Cliente cliente;

    public void Saca(double valor)
    {
      if(this.saldo >= valor) {
        this.saldo -= valor;
      }
    }

    public void Deposita(double valor)
    {
      this.saldo += valor;
    }

    public void Transfere(double valor, Conta destino)
    {
      this.Saca(valor);
      destino.Deposita(valor);
    }
  }
}
