using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Moq;
using mock.dominio;
using mock.infra;
using mock.servico;

namespace Leiloes.testes
{
  [TestFixture]
  class GeradorDePagamentoTest
  {
    [Test]
    public void DeveGerarPagamentoParaLeilaoEncerrado()
    {
      var leilaoDao = new Mock<LeilaoDaoFalso>();
      var avaliador = new Mock<Avaliador>();
      var pagamentoDao = new Mock<PagamentoDao>();

      Leilao leilao1 = new Leilao("Playstation");
      leilao1.naData(new DateTime(1999,5,5));

      leilao1.propoe(new Lance(new Usuario("Renan"), 500));
      leilao1.propoe(new Lance(new Usuario("Felipe"), 600));

      List<Leilao> listaDeLeiloes = new List<Leilao>();
      listaDeLeiloes.add(leilao1);

      leilaoDao.Setup(l => l.encerrados()).Returns(listaDeLeiloes);

      avaliador.Setup(a => a.MaiorValor).Returns(600);

      Pagamento pagamentoCapturado = null;
      pagamentoDao.Setup(p => p.Salvar(It.IsAny<Pagamento>())).Callback<Pagamento>(r => pagamentoCapturado = r);

      GeradorDePagamento gerador = new GeradorDePagamento(leilaoDao.Object, avaliador.Object, pagamentoDao.Object);
      gerador.Gera();

      // como que eu escrevo esse assert?
      Assert.AreEqual(600, pagamentoCapturado.Valor);
    }

    [Test]
    public void DeveJogarParaOProximoDiaUtil()
    {
      var leilaoDao = new Mock<LeilaoDaoFalso>();
      var pagamentoDao = new Mock<PagamentoDao>();
      var relogio = new Mock<Relogio>();

      relogio.Setup(r => r.hoje()).Returns(new DateTime(2012, 4, 7));

      Leilao leilao1 = new Leilao("Playstation");
      leilao1.naData(new DateTime(1999,5,5));

      leilao1.propoe(new Lance(new Usuario("Renan"), 500));
      leilao1.propoe(new Lance(new Usuario("Felipe"), 600));

      List<Leilao> listaDeLeiloes = new List<Leilao>();
      listaDeLeiloes.add(leilao1);

      leilaoDao.Setup(l => l.Encerrados()).Returns(listaDeLeiloes);

      Pagamento pagamentoCapturado = null;
      pagamento.Setup(p => p.Salvar(It.IsAny<Pagamento>())).Callback<Pagamento>(r => pagamentoCapturado);

      GeradorDePagamento gerador = new GeradorDePagamento(leilao.Dao.Object, new Avaliador(), pagamentoDao.Object. relogio.Object);
      gerador.Gera();

      Assert.AreEqual(DayOfWeek.Monday, pagamentoCapturado.Data.DayOfWeek);
    }

     [Test]
      public void deveEmpurrarParaOProximoDiaUtil()
      {
        var leilaoDao = new Mock<LeilaoDaoFalso>();
        var pagamentoDao = new Mock<PagamentoDao>();
        var relogio = new Mock<Relogio>();
        relogio.Setup(r => r.hoje()).Returns(new DateTime(2015,03,29));
        Leilao leilao1 = new Leilao("Playstation");
        leilao1.propoe(new Lance(new Usuario("Renan"), 500));
        leilao1.propoe(new Lance(new Usuario("Felipe"), 1500));
        List<Leilao> leiloes = new List<Leilao>();
        leiloes.Add(leilao1);
        leilaoDao.Setup(l => l.encerrados()).Returns(leiloes);
        Pagamento pagamento = null;
        pagamentoDao.Setup(p => p.salva(It.IsAny<Pagamento>())).Callback<Pagamento>(r => pagamento = r);
        GeradorDePagamento gerador = new GeradorDePagamento(leilaoDao.Object, new Avaliador(), pagamentoDao.Object,relogio.Object);
        gerador.gera();
        Assert.AreEqual(DayOfWeek.Monday, pagamento.data.DayOfWeek);
      }
    }
  }
}
