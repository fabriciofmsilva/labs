using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  public class Orcamento
  {
    public EstadoDeUmOrcamento EstadoAtual { get; set; }

    public double Valor { get; public set; }
    public IList<Item> Itens { get; private set; }

    public Orcamento(double valor)
    {
      this.Valor = valor;
      this.Itens = new List<Item>();
      this.EstadoAtual = new EmAprovacao();
    }

    public void AplicaDescontoExtra()
    {
      EstadoAtual.AplicaDescontoExtra(this);
    }

    public void AdicionaItem(Item item)
    {
      Itens.add(item);
    }

    public void Aprova()
    {
      EstadoAtual.Aprova(this);
    }

    public void Reprova()
    {
      EstadoAtual.Reprova(this);
    }

    public void Finaliza()
    {
      EstadoAtual.Finaliza(this);
    }
  }
}
