using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  public class IKCV : TemplateDeImpostoCondicional
  {
    public bool DeveUsarMaximaTaxacao(Orcamento orcamento)
    {
      return orcamento.Valor > 500 && temItemMaiorQue100ReaisNo(orcamento);
    }

    public double MaximaTaxacao(Orcamento orcamento)
    {
      return orcamento.Valor * 0.1;
    }

    public double MinimaTaxacao(Orcamento orcamento)
    {
      return orcamento.Valor * 0.06;
    }

    public bool temItemMaiorQue100ReaisNo(Orcamento orcamento)
    {
      foreach(Item item in orcamento.Itens)
      {
        if(item.Valor > 100) return true;
      }

      return false;
    }
  }
}
