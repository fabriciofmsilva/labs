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

    private void Form1_Load(object sender, EventArgs e)
    {

    }

    private void button1_Click(Object sender, EventArgs e)
    {
      var contas = new List<Conta>();
      var c1 = new ContaCorrente();
      c1.Titular = "Mauricio";
      contas.Add(c1);

      Conta copiaC1 = contas[0];

      var c2 = new ContaCorrente();
      c2.Titular = "Victor";

      MessageBox.Show("Está lá: " + contas.Contains(c1));
      MessageBox.Show("Está lá: " + contas.Contains(c2));

      contas.Add(c2);
      //contas.Remove(c1);
      contas.RemoveAt(0);

      MessageBox.Show("numero de contas: " + contas.Count);

      foreach(var c in contas)
      {
        MessageBox.Show(c.Titular);
      }
    }
  }
}
