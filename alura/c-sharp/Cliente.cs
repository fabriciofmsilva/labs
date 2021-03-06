using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Caelum.CaixaEletronico.Usuarios
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

    public override bool Equals(object obj)
    {
      Cliente cliente = (Cliente)obj;
      return this.Rg.Equals(cliente.Rg);
    }

    public override string ToString()
    {
      return "Cliente Nome: " + this.nome + " Rg: " + this.Rg;
    }
  }
}
