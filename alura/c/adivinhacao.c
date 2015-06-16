#include <stdio.h>

int main() {

  // imprime o cabecalho do nosso jogo
  printf("******************************************\n");
  printf("* Bem vindo ao nosso jogo de adivinhação *\n");
  printf("******************************************\n");

  int numerosecreto = 42;

  int chute;

  printf("Qual é o seu chute? ");
  scanf("%d", &chute);
  printf("Seu chute foi %d\n", chute);

  if(chute == numerosecreto) {
    printf("Parabéns! Você acertou!\n");
    printf("Jogue de novo, você é um bom jogador!\n");
  }
  else {
    printf("Você errou!\n");
    printf("Mas não desanime, tente de novo!\n");
  }

}
