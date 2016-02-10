namespace Solid
{
  class NotaFiscalDao : IAcaoAposGerarNota
  {
    public void Executa(NotaFiscal nf)
    {
      Console.WriteLine("Persistindo nota");
    }
  }
}
