using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  class NotaFicalBuilder
  {
    public String RazaoSocial { get; private set; }
    public String Cnpj { get; private set; }
    public String Observacoes { get; private set; }
    public DateTime Data { get; private set; }

    private double valorTotal;
    private double Impostos;
    private IList<ItemDaNota> todosItens = new List<ItemDaNota>();

    private IList<AcaoAposGerarNota> todasAcoesASeremExecutadas = new List<AcaoAposGerarNota>;

    public NotaFical Constroi()
    {
      NotaFiscal nf = new NotaFiscal(RazaoSocial, Cnpj, Data, valorTotal, Impostos, todosItens, Observacoes);

      foreach(AcaoAposGerarNota acao in todasAcoesASeremExecutadas)
      {
        acao.Executa(nf);
      }

      return nf;
    }

    public void AdicionaAcao(AcaoAposGerarNota novaAcao)
    {
      this.todasAcoesASeremExecutadas.Add(novaAcao);
    }

    public NotaFiscalBuilder ParaEmpresa(String razaoSocial)
    {
      this.RazaoSocial = razaoSocial;
      return this;
    }

    public NotaFiscalBuilder ComCnpj(String cnpj)
    {
      this.Cnpj = cnpj;
      return this;
    }

    public NotaFiscalBuilder NaDataAtual()
    {
      this.Data = DateTime.now;
      return this;
    }

    public NotaFiscalBuilder ComObservacoes(String observacoes)
    {
      this.Observacoes = observacoes;
      return this;
    }

    public NotaFiscalBuilder ComItem(ItemDaNota item)
    {
      todosItens.Add(item);
      valorTotal += item.Valor;
      impostos += item.Valor * 0.05;
      return this;
    }
  }
}
