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
    public void DeveEntenderLancesEmOrdemDecescente()
    {
      // 1a parte: cenario
      Usuario joao = new Usuario("Joao");
      Usuario jose = new Usuario("Jose");
      Usuario maria = new Usuario("Maria");

      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(maria, 400.0));
      leilao.propoe(new Lance(joao, 300.0));
      leilao.propoe(new Lance(jose, 200.0));
      leilao.propoe(new Lance(maria, 100.0));

      // 2a parte: acao
      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      // 3a parte: validacao
      Assert.AreEqual(400, maiorEsperado, 0.0001);
      Assert.AreEqual(100, menorEsperado, 0.0001);
    }

    [Test]
    public void DeveEntenderLeilaoComApenasUmLance()
    {
      // 1a parte: cenario
      Usuario joao = new Usuario("Joao");

      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(joao, 1000.0));

      // 2a parte: acao
      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      // 3a parte: validacao
      Assert.AreEqual(1000, maiorEsperado, 0.0001);
      Assert.AreEqual(1000, menorEsperado, 0.0001);
    }

    [Test]
    public void DeveEntenderLancesEmOrdemAleatoria()
    {
      // 1a parte: cenario
      Usuario joao = new Usuario("Joao");
      Usuario jose = new Usuario("Jose");
      Usuario maria = new Usuario("Maria");

      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(maria, 200.0));
      leilao.propoe(new Lance(joao, 450.0));
      leilao.propoe(new Lance(jose, 120.0));
      leilao.propoe(new Lance(maria, 700.0));
      leilao.propoe(new Lance(joao, 630.0));
      leilao.propoe(new Lance(jose, 230.0));

      // 2a parte: acao
      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      // 3a parte: validacao
      Assert.AreEqual(700, maiorEsperado, 0.0001);
      Assert.AreEqual(120, menorEsperado, 0.0001);
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

    [Test]
    public void DeveEncontrarOsTresMaioresLances()
    {
      Usuario joao = new Usuario("Joao");
      Usuario maria = new Usuario("Maria");
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(joao, 100));
      leilao.Propoe(new Lance(maria, 200));
      leilao.Propoe(new Lance(joao, 300));
      leilao.Propoe(new Lance(maria, 400));

      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(3, maiores.Count);
      Assert.AreEqual(400, maiores[0], 0.0001);
      Assert.AreEqual(300, maiores[1], 0.0001);
      Assert.AreEqual(200, maiores[2], 0.0001);
    }

    [Test]
    public void DeveDevolverTodosLancesCasoNaoHajaNoMinimo3()
    {
      Usuario joao = new Usuario("Joao");
      Usuario maria = new Usuario("Maria");
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(joao, 100));
      leilao.Propoe(new Lance(maria, 200));

      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(3, maiores.Count);
      Assert.AreEqual(200, maiores[0], 0.0001);
      Assert.AreEqual(100, maiores[1], 0.0001);
    }

    [Test]
    public void DeveDevolverListaVaziaCasoNaoHajaLances()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      Avaliador leiloeiro = new Avaliador();
      leiloeiro.Avalia(leilao);

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(0, maiores.Count);
    }
  }
}
