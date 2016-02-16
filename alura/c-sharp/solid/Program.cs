namespace Solid
{
  class Programa
  {
    public void Main(string[] args)
    {
      IList<ContaComum> contas = ContasDoBanco();

      foreach(ContaComum conta in contas)
      {
        conta.somaInvestimentos();

        Console.WriteLine("Novo saldo: " + conta.Saldo);
      }

      Console.ReadLine();
    }

    private static IList<ContaComum> ContasDoBanco()
    {
      List<ContaComum> contas = List<ContaComum>();
      contas.Add(umaContaComum(100));
      contas.Add(umaContaComum(150));
      contas.Add(umaContaComum(100));
      return contas;
    }

    private static ContaEstudante umaContaEstudante(double saldo)
    {
      ContaEstudante conta = new ContaEstudante();
      conta.Deposita(saldo);
      return conta;
    }

    private static ContaComum umaContaComum(double saldo)
    {
      ContaComum conta = new ContaComum();
      conta.Deposita(saldo);
      return conta;
    }
  }
}
