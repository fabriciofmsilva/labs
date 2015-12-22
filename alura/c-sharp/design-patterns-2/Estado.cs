using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class Estado
  {
    public Contrato Contrato { get; private set; }

    public Estado(Contrato contrato)
    {
      this.Contrato = contrato;
    }
  }
}
