using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class PagaPedido : IComando
  {
    private Pedido pedido;

    public PagaPedido(Pedido pedido)
    {
      this.pedido = pedido;
    }

    public void Executa()
    {
      Console.WriteLine("Pagando o pedido do cliente {0}", pedido.Cliente);
      pedido.Paga();
    }
  }
}
