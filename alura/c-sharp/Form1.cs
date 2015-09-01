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
      double valorSaque = Convert.ToDouble(textoValorSaque.Text);

      try
      {
        this.conta.Saca(valorSaque);
        MessageBox.Show("Dinheiro Liberado");
      }
      catch (SaldoInsuficienteException exception)
      {
        MessageBox.Show("Saldo Insuficiente");
      }
      catch (ArgumentException)
      {
        MessageBox.Show("Valor inválido para o saque");
      }

      MostraConta();
    }
  }
}
