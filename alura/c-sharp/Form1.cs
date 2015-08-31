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
      ContaCorrente c = new ContaCorrente();
      MessageBox.Show("Total: " + ContaCorrente.TotalDeContas);
      ContaCorrente c2 = new ContaCorrente();
      MessageBox.Show("Total: " + ContaCorrente.TotalDeContas);
      MessageBox.Show("Próximo " + ContaCorrente.ProximoNumero());
    }
  }
}
