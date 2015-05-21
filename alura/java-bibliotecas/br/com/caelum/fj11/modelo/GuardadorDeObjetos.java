package br.com.caelum.fj11.modelo;

public class GuardadorDeObjetos {
  private Object[] contas;
  private int posicaoLivre;

  public GuardadorDeObjetos() {
    contas = new Object[100];
    posicaoLivre = 0;
  }

  public void adiciona(Object nova) {
    contas[posicaoLivre] = nova;
    posicaoLivre++;
  }

  public Object pega(int posicao) {
    return contas[posicao];
  }
}
