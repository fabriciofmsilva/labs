namespace Solid
{
  class DezOuVintePorcento : IRegraDeCalculo
  {
    public double Calcula(Functionario functionario)
    {
      if (functionario.SalarioBase > 3000.0)
      {
        return functionario.SalarioBase * 0.8;
      }
      else
      {
        return functionario.SalarioBase * 0.9;
      }
    }
  }
}
