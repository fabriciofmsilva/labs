using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  interface IMensagem
  {
    IEnviador Enviador { get; set; }

    void Envia();

    string Formata();
  }
}
