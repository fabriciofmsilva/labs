package br.com.caelum.fj11.modelo;

import br.com.caelum.fj11.excecao;

public class Conta {
  private double saldo;
  private String titular;
  private int agencia;
  private int numero;

  public void saca(double valor) throws Exception {
    if(saldo >= valor) {
      this.saldo -= valor;
    }
    else {
      throw new SaldoInsuficienteException(saldo);
    }
  }

  public void deposita(double valor) {
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
}
