using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Piano
  {
    public void Toca(IList<INota> musica)
    {
      foreach (var nota in musica)
      {
        Console.Beep(nota.frequencia, 300);
      }
    }
  }
}
