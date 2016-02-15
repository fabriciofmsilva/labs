namespace Solid
{
  class Frete : IServicoDeEntrega
  {
    public double Para(string cidade)
    {
      if('SAO PAULO'.Equals(cidade.TuUpper()))
      {
        return 15;
      }

      return 30;
    }
  }
}
