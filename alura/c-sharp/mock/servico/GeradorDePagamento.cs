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
    private Relogio relogio;

    public GeradorDePagamento(LeilaoDaoFalso leilaoDao, Avaliador avaliador, PagamentoDao pagamentoDao, Relogio relogio)
    {
      this.leilaoDao = leilaoDao;
      this.avaliador = avaliador;
      this.pagamentoDao = pagamentoDao;
      this.relogio = relogio;
    }

    public GeradorDePagamento(LeilaoDaoFalso leilaoDao, Avaliador avaliador, PagamentoDao pagamentoDao : this(leilaoDao, avaliador, pagamentoDao, new RelogioDoSistema()))
    {

    }

    public void Gera()
    {
      List<Leilao> encerrados = leilaoDao.Encerrados();

      foreach(var l in encerrados)
      {
        this.avaliador.Avalia();

        Pagamento pagamento = new Pagamento(this.avaliador.MaiorValor, this.ProximoDiaUtil(), PagamentoDao pagamentoDao);

        this.pagamentoDao.Salvar(pagamento);
      }
    }

    public DateTime ProximoDiaUtil()
    {
      DateTime data = relogio.hoje();
      DayOfWeek diaDaSemana = data.DayOfWeek;

      if(diaDaSemana == DayOfWeek.Saturday)
      {
        data = data.AddDays(2);
      } else id(diaDaSemana == DayOfWeek.Sunday)
      {
        data = data.AddDays(1);
      }

      return data;
    }
  }
}
