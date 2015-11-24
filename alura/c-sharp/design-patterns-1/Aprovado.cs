using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  public class Aprovado : EstadoDeUmOrcamento
  {
    public void AplicaDescontoExtra(Orcamento orcamento)
    {
      orcamento.Valor -= orcamento.Valor * 0.02;
    }

    public void Aprova(Orcamento orcamento) {
      throw new Exception("Orcamento já está em estado de aprovacao");
    }

    public void Reprova(Orcamento orcamento) {
      throw new Exception("Orcamento esta em aprovado, não pode ser reprovado agora");
    }

    public void Finaliza(Orcamento orcamento) {
      orcamento.EstadoAtual = new Finalizado();
    }
  }
}
