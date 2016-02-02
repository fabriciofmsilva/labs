namespace Solid
{
  class QuinzeOuVinteCincoPorcento : IRegraDeCalculo
  {
    public double Calcula(Functionario functionario)
    {
      if (functionario.SalarioBase > 2000.0)
      {
        return functionario.SalarioBase * 0.75;
      }
      else
      {
        return functionario.SalarioBase * 0.85;
      }
    }
  }
}
