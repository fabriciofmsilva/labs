namespace Solid
{
  class Programa
  {
    public void Main(string[] args)
    {
      EnviadorDeEmail enviadorEmail = new EnviadorDeEmail();
      NotaFiscalDao nfDao = new NotaFiscalDao();
      IList<IAcaoAposGerarNota> acoes = new IList<IAcaoAposGerarNota>();
      acoes.Add(new enviadorEmail());
      acoes.add(new NotaFiscalDao());
      acoes.add(new SAP());
      GeradorDeNotaFiscal gnf = new GeradorDeNotaFiscal(acoes);
      Fatura fatura = new Fatura(200, "Renan Saggio");
      gnf.Gera(fatura);
      Console.ReadKey();
    }
  }
}
