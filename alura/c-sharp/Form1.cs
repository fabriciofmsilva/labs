using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace OiMundo
{
  public partial class Form1 : Form
  {
    public Form1()
    {
      InitializeComponent();
    }

    private void Form1_Load(object sender, EventArgs e)
    {

    }

    private void button1_Click(Object sender, EventArgs e)
    {
      string titulo = "Arquitetura e " + "Design de Software";
      titulo += "!";

      MessageBox.Show(titulo);

      int idade = 42;
      string nome = "Guilherme";
      string mensagem = string.Format("Olá {0} sua idade é: {1}", nome, idade);

      MessageBox.Show(mensagem);

      string texto = "guilher,42,sao paulo,brasil";
      string[] partes = texto.split(',');
      foreach(string parte in partes)
      {
        MessageBox.Show(parte);
      }

      string curso = "fn11";
      curso = curso.ToUpper().Replace("1", "2");
      MessageBox.Show(curso);

      string nomeCompleto = "Guilherme Silveira";
      string primeiroNome = nomeCompleto.Substring(0, 9);
      MessageBox.Show(primeiroNome);

      int posicaoDoS = nomeCompleto.IndexOf("s");
      string segundoNome = nomeCompleto.Substring(posicaoDoS);
      MessageBox.Show(segundoNome);

    }
  }
}
