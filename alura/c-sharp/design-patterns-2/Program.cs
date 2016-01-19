using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Program
  {
    static void Main(string[] args)
    {
      FilaDeTrabalho fila = new FilaDeTrabalho();
      Pedido pedido1 = new Pedido("Mauricio", 100.0);
      Pedido pedido2 = new Pedido("Marcelo", 200.0);

      fila.Adiciona(new PagaPedido(pedido1));
      fila.Adiciona(new PagaPedido(pedido2));

      fila.Adiciona(new FinalizaPedido(pedido1));

      fila.Processa();
    }
  }
}
