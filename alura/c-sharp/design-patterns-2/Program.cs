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
      // (1 + 10) + (20 - 10)
      // + 1 100
      // IExpressao esquerda = new Soma(new Numero(1), new Numero(10));
      // IExpressao direita = new Subtracao(new Numero(20), new Numero(10));
      // IExpressao soma = new Soma(esquerda, direita);

      // Console.WriteLine(soma.Avalia());

      Expression soma = Expression.Add(Expression.Constant(10), Expression.Constant(100));
      Func<int> funcao = Expression.Lambda<Func<int>>(soma).Compile();
      Console.WriteLine(funcao());

      Impressora impressora = new Impressora();
      soma.Aceita(impressora);
    }
  }
}
