using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace CaixaEletronico
{
  public partial class Form1 : Form
  {
    public Form1()
    {
      InitializeComponent();
    }

    private void button1_Click(object sender, EventArgs e)
    {
      Conta guilherme = new Conta();
      Conta mauricio = new Conta();

      guilherme.saldo = 1500.00;
      mauricio.saldo = 2000.00;

      guilherme.Transfere(200.0, mauricio);
      MessageBox.Show("O saldo atual é: " + guilherme.saldo);
      MessageBox.Show("O saldo do Maurício é: " + mauricio.saldo);
    }
  }
}
