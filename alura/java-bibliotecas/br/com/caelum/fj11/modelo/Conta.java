package br.com.caelum.fj11.modelo;

import br.com.caelum.fj11.excecao;

public class Conta implements Comparable<Conta> {
  private double saldo;
  private String titular;
  private int agencia;
  protected int numero;

  /**
   * realiza um saque na conta dado o valor passado
   *
   * @param valor valor a ser sacado
   * @throws Exception caso saldo seja insuficiente
   */
  public void saca(double valor) throws Exception {
    if(saldo >= valor) {
      this.saldo -= valor;
    }
    else {
      throw new SaldoInsuficienteException(saldo);
    }
  }

  public int getNumero() {
    return this.numero;
  }

  public void setNumero(Int numero) {
    this.numero = numero;
  }

  public synchronized void deposita(double valor) {
    this.saldo += valor;
  }

  public String getTitular() {
    return titular;
  }

  public void setTitular(String titular) {
    this.titular = titular;
  }

  public double getSaldo() {
    return this.saldo;
  }

  @Override
  public String toString() {
    return "Conta com saldo " + saldo;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Conta other = (Conta) obj;
    if (numero != other.numero)
      return false;
    return true;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    long temp;
    temp = Double.doubleToLongBits(saldo);
    result = prime * result + (int) (temp ^ (temp >>> 32));
    return result;
  }

  @Override
  public int compareTo(Conta outra) {
    if(this.saldo < outra.saldo) return -1;
    if(this.saldo > outra.saldo) return 1;
    return 0;
  }
}
