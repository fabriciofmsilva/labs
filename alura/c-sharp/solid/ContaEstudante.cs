namespace Solid
{
  public class ContaDeEstudante : ContaComum
  {
    private ManipuladorDeSaldo m;
    public int Milhas { get;private set; }

    public ContaDeEstudante()
    {
      m = new ManipuladorDeSaldo()
    }

    public void Deposita(double valor)
    {
      m.Deposita(valor);
      this.Milhas += (int)valor;
    }
  }
}
