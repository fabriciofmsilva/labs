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

      EncerradorDeLeilao encerrador = new EncerradorDeLeilao(dao.Object);
      encerrador.Encerra();

      Assert.AreEqual(2, encerrador.Total);
      Assert.isTrue(leilao1.Encerrado);
      Assert.isTrue(leilao2.Encerrado);
    }
  }
}
