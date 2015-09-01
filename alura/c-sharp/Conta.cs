using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Caelum.CaixaEletronico.Usuarios;

namespace Caelum.CaixaEletronico.Contas
{
  abstract class Conta
  {
    public int Numero { get; set; }

    public double Saldo { get; protected set; }

    public Cliente Titular { get; set; }

    public int Tipo { get; set; }

    public void Saca(double valor)
    {
      if(valor < 0)
      {
        throw new ArgumentException();
      }

      if(this.Saldo >= valor)
      {
        this.Saldo -= valor;
      }
      else
      {
        throw new SaldoInsuficienteException();
      }
    }

    public void Deposita(double valor)
    {
      this.Saldo += valor;
    }

    public void Transfere(double valor, Conta destino)
    {
      this.Saca(valor);
      destino.Deposita(valor);
    }
  }
}
