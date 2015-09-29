using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using mock.dominio;
using mock.servico;
using mock.infra;

namespace Leiloes.servico
{
  class GeradorDePagamento
  {
    private LeilaoDaoFalse leilaoDao;
    private Avaliador avaliador;
    private PagamentoDao pagamentoDao;

    public GeradorDePagamento(LeilaoDaoFalso leilaoDao, Avaliador avaliador, PagamentoDao pagamentoDao)
    {
      this.leilaoDao = leilaoDao;
      this.avaliador = avaliador;
      this.pagamentoDao = pagamentoDao;
    }

    public void Gera()
    {
      List<Leilao> encerrados = leilaoDao.Encerrados();

      foreach(var l in encerrados)
      {
        this.avaliador.Avalia();

        Pagamento pagamento = new Pagamento(this.avaliador.MaiorValor, DateTime.Today, PagamentoDao pagamentoDao);

        this.pagamentoDao.Salvar(pagamento);
      }
    }
  }
}
