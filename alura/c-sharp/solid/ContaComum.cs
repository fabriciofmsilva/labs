namespace Solid
{
  public class ContaComum
  {
    private ManipuladorDeSaldo manipulador

    public ContaComum()
    {
    this.manipulador = new ManipuladorDeSaldo();
    }

    public void Saca(double valor)  {
      manipulador.Saca(valor);
    }

    public void Deposita(double valor)  {
      manipulador.deposita(valor);
    }

    public void SomaInvestimento()  {
      this.manipulador.SomaInvestimento(1.1);
    }
  }
}
