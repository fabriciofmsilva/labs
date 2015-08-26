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
      Conta conta = new Conta();
      conta.Titular = "Victor";
      conta.Deposita(250.0);
      conta.Numero = 1;

      textoTitular.Text = conta.Titular;
      textoSaldo.Text = Convert.ToString(conta.Saldo);
      textoNumero.Text = Convert.ToString(conta.Numero);
    }
  }
}
