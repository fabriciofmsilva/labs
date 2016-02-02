namespace Solid
{
  public class Funcionario
  {
    public Cargo cargo { get; private set; }

    public double SalarioBase { get; private set; }

    public Funcionario(Cargo cargo, double salarioBase)
    {
      this.Cargo = cargo;
      this.SalarioBase = salarioBase;
    }

    public double CalculaSalario()
    {
      return this.Cargo.Regra.Calcula(this);
    }
  }
}
