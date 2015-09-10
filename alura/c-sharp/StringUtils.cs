using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Caelum.CaixaEletronico.Sistema
{
  static class StringUtils
  {
    public static string Pluraliza(this string palavra)
    {
      if(palavra.EndsWith("s"))
      {
        return palavra;
      }
      else
      {
        return palavra + "s";
      }
    }
  }
}
