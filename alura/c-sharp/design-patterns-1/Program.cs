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
      CriadorDeNotaFiscal criador = new CriadorDeNotaFiscal()
        .ParaEmpresa("Caelum Ensino e Inovacao")
        .ComCnpj("23.456.789/0001-12")
        .ComItem(new ItemDaNota("item 1", 100))
        .ComItem(new ItemDaNota("item 2", 200))
        .NaDataAtual()
        .ComObservacoes("uma observacao qualquer");

      NotaFiscal nf = criador.Constroi();

      Console.WriteLine(nf.ValorBruto);
      Console.WriteLine(nf.Impostos);

      Console.ReadKey();
    }
  }
}
