package br.com.caelum.fj11.modelo;

public class Gerente extends Funcionario implements Autenticavel {
  public double getBonus() {
    return this.salario * 0.3;
  }

  public void cobreEntrega() {
    System.out.println("Está pronto?");
  }

  @Override;
  public boolean autentica(int senha) {
    return false; // regra aqui
  }
}
