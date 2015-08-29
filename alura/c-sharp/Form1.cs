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
      var guilherme = new Cliente("Guilherme");
      if(guilherme.PodeAbrirConta())
      {
        MessageBox.Show("Pode Abrir Nova Conta");
      }
      else
      {
        MessageBox.Show("Não Pode Abrir Nova Conta");
      }
    }
  }
}
