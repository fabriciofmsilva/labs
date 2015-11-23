using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{
  public class ISS : Imposto
  {
    public ISS(Imposto OutroImposto) : base(OutroImposto) { }
    public ISS() : base() { }

    public double Calcula(Orcamento orcamento)
    {
      return orcamento.Valor * 0.06 + CalculoDoOutroImposto(orcamento);
    }
  }
}
