namespace Caelum.Leilao
{
  public class Usuario
  {
    public int Id { get; private set; }
    public string Nome { get; private set; }

    public Usuario(int id, string nome)
    {
      this.Id = id;
      this.Nome = nome;
    }
  }
}
