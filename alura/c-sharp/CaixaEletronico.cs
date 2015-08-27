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
      ContaPoupanca cp = new ContaPoupanca();
      cp.Deposita(1000.0);
      cp.Saca(100.0);

      MessageBox.Show("Saldo Poupança " + cp.Saldo);

      Conta c = new Conta();
      c.Deposita(100.0);

      MessageBox.Show("Saldo da Conta " + c.Saldo);
    }
  }
}
