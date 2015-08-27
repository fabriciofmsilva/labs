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
      Conta c1 = new Conta();
      c1.Deposita(10);
      ContaPoupanca c2 = new ContaPoupanca;
      c2.Deposita(100);

      TotalizadorDeContas t = new TotalizadorDeContas();
      t.adiciona(c1);
      t.adiciona(c2);

      MessageBox.Show("O total é: " + t.Total);
    }
  }
}
