using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Program
  {
    static void Main(string[] args)
    {
      NotasMusicas notas = new NotasMusicas();
      IList<INota> musica = new List<INota>(){
        notas.Pega("do"),
        notas.Pega("re"),
        notas.Pega("mi"),
        notas.Pega("fa"),
        notas.Pega("fa"),
        notas.Pega("fa"),
      };
      Piano piano = new Piano();
      piano.toca(musica);
    }
  }
}
