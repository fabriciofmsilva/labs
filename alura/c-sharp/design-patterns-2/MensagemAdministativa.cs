using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class MensagemAdministrativa : IMensagem
  {
    private string nome;
    public IEnviador Enviador { get; set; }

    public MensagemAdministrativa(string nome)
    {
      this.nome = nome;
    }

    public void Envia()
    {
      this.Enviador.Envia(this);
    }

    public string Formata()
    {
      Console.WriteLine("Enviando a mensagem para o administrador {0}", nome);
    }
  }
}
