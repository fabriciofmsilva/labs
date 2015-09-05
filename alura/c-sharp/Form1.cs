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
      var contas = new HashSet<Conta>();
      var c1 = new ContaCorrent();
      c1.Titular = "Mauricio";

      contas.Add(c1);
      contas.Add(c1);

      foreach(var c in contas)
      {
        MessageBox.Show(c.Titular);
      }

    }
  }
}
