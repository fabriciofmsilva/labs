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
  }
}
