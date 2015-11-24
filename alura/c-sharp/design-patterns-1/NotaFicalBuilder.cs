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

    public NotaFical Constroi()
    {
      return new NotaFiscal(RazaoSocial, Cnpj, Data, valorTotal, Impostos, todosItens, Observacoes);
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
