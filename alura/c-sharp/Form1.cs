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

    private void button1_Click(Object sender, EventArgs e)
    {
      ContaCorrente contaCorrente = new ContaCorrente();
      ContaPoupanca contaPoupanca = new ContaPoupanca();

      contaCorrente.Deposita(100);
      contaPoupanca.Deposita(100);

      Conta conta = contaPoupanca;

      contaCorrente.Saca(10);

      MessageBox.Show("Saldo atual: " + contaCorrente.Saldo);
    }
  }
}
