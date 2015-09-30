using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leiloes.servico
{
  public class RelogioDoSistema : Relogio
  {
    public DataTime hoje()
    {
      return DataTime.Today
    }
  }
}
