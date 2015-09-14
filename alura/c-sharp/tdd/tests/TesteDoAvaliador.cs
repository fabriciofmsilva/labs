using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NUnit.Framework;

namespace Caelum.Leilao
{
  [TestFixture]
  public class AvaliadorTest
  {
    [Test]
    public void DeveEntenderLancesEmOrdemCrescente()
    {
      // 1a parte: cenario
      Usuario joao = new Usuario("Joao");
      Usuario jose = new Usuario("Jose");
      Usuario maria = new Usuario("Maria");

      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(maria, 250.0));
      leilao.propoe(new Lance(joao, 300.0));
      leilao.propoe(new Lance(jose, 400.0));

      // 2a parte: acao
      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      // 3a parte: validacao
      double maiorEsperado = 400;
      double menorEsperado = 250;

      Assert.AreEqual(leiloeiro.MaiorLance, maiorEsperado);
      Assert.AreEqual(leiloeiro.MenorLance, menorEsperado);
    }

    [Test]
    public void DeveCalcularAMedia()
    {
      // cenario: 3 lances em ordem crescente
      Usuario joao = new Usuario("Joao");
      Usuario jose = new Usuario("José");
      Usuario maria = new Usuario("Maria");

      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(maria,300.0));
      leilao.Propoe(new Lance(joao,400.0));
      leilao.Propoe(new Lance(jose,500.0));

      // executando a acao
      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      // comparando a saida com o esperado
      Assert.AreEqual(400, leiloeiro.Media, 0.0001);
    }
  }
}
