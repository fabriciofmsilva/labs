using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class EnviaPorSMS : IEnviador
  {
    public void Envia(IMensagem mensagem)
    {
      Console.WriteLine("Enviando a mensagem por SMS");
      Console.WriteLine(mensagem.Formata());
    }
  }
}
