namespace Solid
{
  class EnviadorDeEmail : IAcaoAposGerarNota
  {
    public void Executa(NotaFiscal nf)
    {
      Console.WriteLine("Enviando email");
    }
  }
}
