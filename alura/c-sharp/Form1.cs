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
      Cliente cliente1 = new Cliente("Guilherme");
      cliente1.Rg = "1234-5";

      Cliente cliente2 = new Cliente("Guilherme");
      cliente2.Rg = "1234-5";

      cliente1.Equals(cliente2);
      cliente1.ToString();
    }
  }
}
