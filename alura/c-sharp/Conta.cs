using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  abstract class Conta
  {
    public int Numero { get; set; }

    public double Saldo { get; protected set; }

    public Cliente Titular { get; set; }

    public int Tipo { get; set; }

    public abstract void Saca(double valor);

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
