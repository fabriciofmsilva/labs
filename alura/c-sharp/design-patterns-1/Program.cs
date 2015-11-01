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
      Imposto iss = new ISS();
      Imposto icms = new ICMS();

      Orcamento orcamento = new Orcamento(500.0);

      CalculadorDeImpostos calculador = new CalculadorDeImpostos();

      calculador.RealizaCalculo(orcamento, icms);
      calculador.RealizaCalculo(orcamento, iss);

      Console.ReadKey();
    }
  }
}
