package br.com.caelum.fj11.modelo;

class Desenvolvedor extends Funcionario {
  public double getBonus() {
    return this.salario * 0.25;
  }
}
