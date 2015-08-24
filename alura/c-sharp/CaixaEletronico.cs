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
      Conta umaConta = new Conta();
      umaConta.numero = 1;
      umaConta.titular = "Joaquim José";
      umaConta.saldo = 2000.0;

      Conta outraConta = new Conta();
      outraConta.numero = 2;
      outraConta.titular = "Silva Xavier";
      outraConta.saldo = 1500.0;

      MessageBox.Show("O titular da conta 1 é: " + umaConta.titular);
    }
  }
}
