namespace Solid
{
  public class ProcessadorDeBoletos
  {
    public void Processa(IList<Boleto> boletos, Fatura fatura)
    {
      foreach(Boleto boleto in boletos)
      {
        Pagamento pagamento = new Pagamento(boleto.Valor, MeioDePagamento.BOLETO);
        fatura.AdicionaPagamento(pagamento);
      }
    }
  }
}
