using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CaixaEletronico
{
  class Cliente
  {
    public string Nome { get; set; };
    public string rg;
    public string cpf;
    public string endereco;
    public int idade;

    public Cliente(string nome)
    {
      this.Nome = nome;
    }

    public bool PodeAbrirConta()
    {
      var maiorDeIdade = (this.Idade >= 18);
      var emancipado = (this.EEmancipado);
      var temCpf = !string.IsNullOrEmpty(this.Cpf);

      return (maiorDeIdade || emancipado) && temCpf;
    }

    public bool EhMaiorDeIdade()
    {
      return this.idade >= 18;
    }
  }
}
