using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace CaixaEletronicoWindowsForm
{
  public partial class Form1 : Form
  {
    public Form1()
    {
      InitializeComponent();
    }

    private void Form1_Load(object sender, EventArgs e)
    {
      Conta[] contas = new Conta[2];
      contas[0] = new Conta();
      contas[1] = new ContaPoupanca();

      contas[0].Deposita(10);
      contas[1].Deposita(100);

      foreach(Conta conta in contas)
      {
        MessageBox("O saldo da conta é: " + conta.Saldo);
      }
    }
  }
}
