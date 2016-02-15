namespace Solid
{
  class Programa
  {
    public void Main(string[] args)
    {
      Compra compra = new Compra(500, 'sao paulo');
      CalculadoraDePrecos calc = new CalculadoraDePrecos(new TabelaDePrecoPadrao(), new Frete());

      double resultado = calc.Calcula(compra);

      Console.WriteLine('O preco da compra e: ' + resultado);
      Console.ReadKey();
    }
  }
}
