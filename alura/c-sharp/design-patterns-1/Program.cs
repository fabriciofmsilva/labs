using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  class Program
  {
    public void Main(string[] args)
    {
      Imposto iss = new ISS(new ICMS());

      Orcamento orcamento = new Orcamento(500);

      double valor = iss.Calcula(orcamento);

      Console.WriteLine(valor);

      Console.ReadKey();
    }
  }
}
