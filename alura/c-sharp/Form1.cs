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

    private Conta ContaComSaldo(double saldo)
    {
      Conta c = new ContaCorrente();
      c.Deposita(saldo);
      return c;
    }

    private void Form1_Load(object sender, EventArgs e)
    {
      var contas = new List<Conta>();
      contas.Add(ContaComSaldo(2300));
      contas.Add(ContaComSaldo(1000));
      contas.Add(ContaComSaldo(2500));

      var filtradas = from c in contas
                      where c.Saldo > 2000
                      select c;

      foreach(Conta c in filtradas)
      {
        Messabox.Show("O saldo e: " + c.Saldo);
      }

      double saldoTotal = filtradas.Sum(c => c.Saldo);
      Messabox.Show("O total é: " + saldoTotal);
    }

    private void button1_Click(Object sender, EventArgs e)
    {


    }
  }
}
