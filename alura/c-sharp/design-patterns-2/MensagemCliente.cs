using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class MensagemCliente : IMensagem
  {
    private string nome;
    public IEnviador Enviador { get; set; }

    public MensagemCliente(string nome)
    {
      this.nome = nome;
    }

    public void Envia()
    {
      this.Enviador.Envia(this);
    }

    public string Formata()
    {
      Console.WriteLine("Enviando a mensagem para o cliente {0}", nome);
    }
  }
}
