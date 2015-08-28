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
    Conta[] contas;
    public Form1()
    {
      InitializeComponent();
    }

    private void Form1_Load(object sender, EventArgs e)
    {
      contas = new Conta[2];
      contas[0] = new Conta();
      contas[0].Numero = 1;
      contas[0].Titular = "Victor";

      contas[1] = new Conta();
      contas[1].Numero = 2;
      contas[1].Titular = "Mario";

      foreach(Conta conta in contas)
      {
        comboContas.Items.Add(conta.Titular);
      }
    }

    private void comboContas_SelectedIndexChanged(object sender, EventArgs e)
    {
      int indiceSelecionado = comboContas.SelectedIndex;
      Conta contaSeleciona = contas[indiceSelecionado];

      textoTitular.Text = contaSeleciona.Titular;
      textoNumero.Text = Convert.ToString(contaSeleciona.Numero);
      textoSaldo.Text = Convert.ToString(contaSeleciona.Saldo);
    }
  }
}
