using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class EnviaPorEmail : IEnviador
  {
    public void Envia(IMensagem mensagem)
    {
      Console.WriteLine("Enviando a mensagem por e-mail");
      Console.WriteLine(mensagem.Formata());
    }
  }
}
