using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  enum Status
  {
    Novo,
    Processado,
    Pago,
    ItemSeparado,
    Entregue
  }
}
