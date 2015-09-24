using mock.dominio;
using mock.infra;
using mock.servico;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mock.servico
{
    public class EncerradorDeLeilao
    {
      private LeilaoDaoFalso dao;
      private Carteiro carteiro;

        public int total { get; private set; }


        public EncerradorDeLeilao(LeilaoDaoFalso dao, Carteiro carteiro)
        {
            total = 0;
            this.dao = dao;
            this.carteiro = carteiro;
        }

        public virtual void encerra()
        {

            List<Leilao> todosLeiloesCorrentes = dao.correntes();

            foreach (var l in todosLeiloesCorrentes)
            {

                if (comecouSemanaPassada(l))
                {
                    try
                    {
                      l.encerra();
                      total++;
                      dao.atualiza(l);
                      carteiro.Envia(l);
                    } catch(Exception e)
                    {
                      // salva um log
                    }

                }
            }
        }


        private bool comecouSemanaPassada(Leilao leilao)
        {

            return diasEntre(leilao.data, DateTime.Now) >= 7;

        }

        private int diasEntre(DateTime inicio, DateTime fim)
        {
            int dias = (int)(fim - inicio).TotalDays;

            return dias;
        }

    }
}
