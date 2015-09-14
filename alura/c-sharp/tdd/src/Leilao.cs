using System.Collections.Generic;
namespace Caelum.Leilao
{
  public class Leilao
  {
    public string Desricao { get; set; }
    public IList<Lance> Lances { get; set; }

    public Leilao(string descricao)
    {
      this.Descicao = descricao;
      this.Lances = new List<Lance>();
    }

    public void Propoe(Lance lance)
    {
      Lances.Add(lance);
    }
  }
}
