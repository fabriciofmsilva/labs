namespace Solid
{
  public class ManipuladorDeSaldo
  {
    public double Saldo {get;private set;}

    public void Deposita(double valor)
    {
      this.Saldo += valor;
    }

    public void Saca(double valor)
    {
      if (valor <= this.Saldo)
      {
        this.Saldo -= valor;
      }
      else
      {
        throw new ArgumentException();
      }
    }

    public void SomaInvestimento(double taxa)  {
      this.Saldo *= taxa;
    }
  }
}
