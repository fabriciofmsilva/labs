using mock.dominio;
using mock.infra;
using mock.servico;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NUnit.Framework;
using Moq;

namespace mock.testes
{
  [TestFixture]
  public class EncerradorDeLeilaoTest
  {
    [Test]
    public void DeveEncerrarLeiloesQueComecaramAUmaSemana()
    {
      DateTime diaDaSemanaPassada = new DateTime(1999, 5, 5);

      Leilao leilao1 = new Leilao("TV de plasma");
      leilao1.NaData(diaDaSemanaPassada);
      Leilao leilao2 = new Leilao("Playstation");
      leilao2.NaData(diaDaSemanaPassada);

      List<Leilao> ListaDeLeiloes = new List<Leilao>();
      ListaDeLeiloes.Add(leilao1);
      ListaDeLeiloes.Add(leilao2);

      var dao = new Mock<LeilaoDaoFalso>();
      dao.Setup(d => d.Correntes()).Returns(ListaDeLeiloes);

      dao.Salva(leilao1);
      dao.Salva(leilao2);

      EncerradorDeLeilao encerrador = new EncerradorDeLeilao(dao.Object), new Carteiro());
      encerrador.Encerra();

      Assert.AreEqual(2, encerrador.Total);
      Assert.isTrue(leilao1.Encerrado);
      Assert.isTrue(leilao2.Encerrado);
    }

    [Test]
    public void DeveEncerrarOsLeiloesESalvarNoDao()
    {
      DateTime diaDaSemanaPassada = new DateTime(1999, 5, 5);

      Leilao leilao1 = new Leilao("TV de plasma");
      leilao1.NaData(diaDaSemanaPassada);
      Leilao leilao2 = new Leilao("Playstation");
      leilao2.NaData(diaDaSemanaPassada);

      List<Leilao> ListaDeLeiloes = new List<Leilao>();
      ListaDeLeiloes.Add(leilao1);
      ListaDeLeiloes.Add(leilao2);

      var dao = new Mock<LeilaoDaoFalso>();
      dao.Setup(d => d.Correntes()).Returns(ListaDeLeiloes);

      EncerradorDeLeilao encerrador = new EncerradorDeLeilao(dao.Object), new Carteiro());
      encerrador.Encerra();

      dao.Verify(d => d.Atualiza(leilao1), Times.Once);
      dao.Verify(d => d.Atualiza(leilao2), Times.Once);
    }

    [Test]
    public void NaoDeveAtualizaOsLeiloesEncerrados()
    {
      DateTime data = new DateTime(2014, 05, 05);
      Leilao leilao1 = new Leilao("Tv 20 polegadas");
      leilao1.naData(data);
      List<Leilao> listaRetorno = new List<Leilao>();
      listaRetorno.Add(leilao1);
      var dao = new Mock<LeilaoDaoFalso>();
      dao.Setup(m => m.correntes()).Returns(listaRetorno);
      EncerradorDeLeilao encerrador = new EncerradorDeLeilao(dao.Object), new Carteiro());
      encerrador.encerra();
      // verify aqui !
      dao.Verify(m => m.atualiza(leilao1),Times.Never());
      dao.Verify(m => m.atualiza(leilao2),Times.Never());
    }

    [Test]
    public void DeveContinuarMesmoQuandoLanceExcessao()
    {
      DateTime diaDaSemanaPassada = new DateTime(1999, 5, 5);

      Leilao leilao1 = new Leilao("TV de plasma");
      leilao1.NaData(diaDaSemanaPassada);
      Leilao leilao2 = new Leilao("Playstation");
      leilao2.NaData(diaDaSemanaPassada);

      List<Leilao> ListaDeLeiloes = new List<Leilao>();
      ListaDeLeiloes.Add(leilao1);
      ListaDeLeiloes.Add(leilao2);

      var dao = new Mock<LeilaoDaoFalso>();
      dao.Setup(d => d.Correntes()).Returns(ListaDeLeiloes);
      dao.Setup(d => d.atualiza(leilao1)).Throws(new Exception());

      var carteiro = new Mock<Carteiro>();

      EncerradorDeLeilao encerrador = new EncerradorDeLeilao(dao.Object, carteiro);
      encerrador.Encerra();

      dao.Verify(d => d.Atualiza(leilao2).Times.Once());
      carteiro.Verify(c => c.Envia(leilao2).Times.Once());
    }
  }
}
