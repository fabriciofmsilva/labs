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
      // Imposto iss = new ISS();
      // Imposto icms = new ICMS();

      // Orcamento orcamento = new Orcamento(500.0);

      // CalculadorDeImpostos calculador = new CalculadorDeImpostos();

      // calculador.RealizaCalculo(orcamento, icms);
      // calculador.RealizaCalculo(orcamento, iss);

      CalculadorDeDescontos calculador = new CalculadorDeDescontos();

      Orcamento orcamento = new Orcamento(500);
      orcamento.AdicionaItem(new Item("CANETA", 250));
      orcamento.AdicionaItem(new Item("LAPIS", 250));
      orcamento.AdicionaItem(new Item("FOGAO", 250));
      orcamento.AdicionaItem(new Item("GELADEIRA", 250));
      orcamento.AdicionaItem(new Item("MICROONDAS", 250));
      orcamento.AdicionaItem(new Item("XBOX", 250));

      double desconto = calculador.Calcula(orcamento);
      Console.WriteLine(desconto);

      // Console.ReadKey();
    }
  }
}
