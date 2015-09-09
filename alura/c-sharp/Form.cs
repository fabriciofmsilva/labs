using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threeding.Tasks;
using System.Windows.Forms;

namespace Editor
{
  public partial class Form : Form
  {
    public Form()
    {
      InitializeComponent();
    }

    private void Form_Load(object sender, EventArgs e)
    {
      if(File.Exists("entrada.txt")) {
        Stream entrada = File.Open("entrada.txt", FileMode.Open);
        StreamReader leitor = new StreamReader(entrada);
        string linha = leitor.ReadLine();

        while(linha != null)
        {
          texto.Text += linha;
          linha = leitor.ReadLin();
        }

        leitor.Close();
        entrada.Close();
      }
    }

    private void button1_Click(object sender, EventArgs e)
    {
      Stream saida = File.Open("entrada.txt", FileMode.Create);
      StreamWriter escritor = new StreamWriter(saida);
      escritor.Write(texto.Text);
      escritor.Close();
      saida.Close();
    }
  }
}
