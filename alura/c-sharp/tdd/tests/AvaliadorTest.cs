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
    private Avaliador leiloeiro;
    private Usuario joao;
    private Usuario jose;
    private Usuario maria;

    [SetUp]
    public void CriaAvaliador()
    {
      this.leiloeiro = new Avaliador();
      this.joao = new Usuario("Joao");
      this.jose = new Usuario("Jose");
      this.maria = new Usuario("Maria");
    }

    [Test]
    public void DeveEntenderLancesEmOrdemCrescente()
    {
      Leilao leilao = new CriadorDeLeilao().Para("Playstation")
          .Lance(maria, 250.0)
          .Lance(joao, 300.0)
          .Lance(jose, 400.0)
          .Constroi();

      // 3a parte: validacao
      double maiorEsperado = 400;
      double menorEsperado = 250;

      Assert.AreEqual(leiloeiro.MaiorLance, maiorEsperado);
      Assert.AreEqual(leiloeiro.MenorLance, menorEsperado);
    }

    [Test]
    public void DeveEntenderLancesEmOrdemDecescente()
    {
      Leilao leilao = new CriadorDeLeilao().Para("Playstation")
          .Lance(maria, 400.0)
          .Lance(joao, 300.0)
          .Lance(jose, 200.0)
          .Lance(maria, 100.0)
          .Constroi();

      // 3a parte: validacao
      Assert.AreEqual(400, maiorEsperado, 0.0001);
      Assert.AreEqual(100, menorEsperado, 0.0001);
    }

    [Test]
    public void DeveEntenderLeilaoComApenasUmLance()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(joao, 1000.0));

      // 3a parte: validacao
      Assert.AreEqual(1000, maiorEsperado, 0.0001);
      Assert.AreEqual(1000, menorEsperado, 0.0001);
    }

    [Test]
    public void DeveEntenderLancesEmOrdemAleatoria()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.propoe(new Lance(maria, 200.0));
      leilao.propoe(new Lance(joao, 450.0));
      leilao.propoe(new Lance(jose, 120.0));
      leilao.propoe(new Lance(maria, 700.0));
      leilao.propoe(new Lance(joao, 630.0));
      leilao.propoe(new Lance(jose, 230.0));

      // 3a parte: validacao
      Assert.AreEqual(700, maiorEsperado, 0.0001);
      Assert.AreEqual(120, menorEsperado, 0.0001);
    }

    [Test]
    public void DeveCalcularAMedia()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(maria,300.0));
      leilao.Propoe(new Lance(joao,400.0));
      leilao.Propoe(new Lance(jose,500.0));

      // comparando a saida com o esperado
      Assert.AreEqual(400, leiloeiro.Media, 0.0001);
    }

    [Test]
    public void DeveEncontrarOsTresMaioresLances()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(joao, 100));
      leilao.Propoe(new Lance(maria, 200));
      leilao.Propoe(new Lance(joao, 300));
      leilao.Propoe(new Lance(maria, 400));

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(3, maiores.Count);
      Assert.AreEqual(400, maiores[0], 0.0001);
      Assert.AreEqual(300, maiores[1], 0.0001);
      Assert.AreEqual(200, maiores[2], 0.0001);
    }

    [Test]
    public void DeveDevolverTodosLancesCasoNaoHajaNoMinimo3()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      leilao.Propoe(new Lance(joao, 100));
      leilao.Propoe(new Lance(maria, 200));

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(3, maiores.Count);
      Assert.AreEqual(200, maiores[0], 0.0001);
      Assert.AreEqual(100, maiores[1], 0.0001);
    }

    [Test]
    public void DeveDevolverListaVaziaCasoNaoHajaLances()
    {
      Leilao leilao = new Leilao("Playstation 3 Novo");

      var maiores = leiloeiro.TresMaiores;

      Assert.AreEqual(0, maiores.Count);
    }

    [Test]
    [ExpectedException(typeof(Exception))]
    public void NaoDeveAvaliarLeiloesSemNenhumLanceDado()
    {
      Leilao.leilao = new CriadorDeLeilao().Para("Playstation").Constroi();

      leiloeiro.Avalia(leilao);
    }
  }
}
