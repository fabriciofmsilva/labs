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
      double saldo = 100.0;
      double valor = 10.0;
      bool podeSacar = (valor <= saldo) && (valor >= 0);
      if(podeSacar)
      {
        saldo = saldo - valor;
        MessageBox.Show("Saque realizado com sucesso");
      }
      else
      {
        MessageBox.Show("Saldo insuficiente");
      }
    }
  }
}
