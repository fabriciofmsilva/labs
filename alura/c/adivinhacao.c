#include <stdio.h>

#define NUMERO_DE_TENTATIVAS 5

int main() {

  // imprime o cabecalho do nosso jogo
  printf("******************************************\n");
  printf("* Bem vindo ao nosso jogo de adivinhação *\n");
  printf("******************************************\n");

  int numerosecreto = 42;

  int chute;

  for(int i = 1; i <= NUMERO_DE_TENTATIVAS; i++) {

    printf("Tentativa %d de %d\n", i, NUMERO_DE_TENTATIVAS);
    printf("Qual é o seu chute? ");

    scanf("%d", &chute);
    printf("Seu chute foi %d\n", chute);

    int acertou = chute == numerosecreto;

    if(acertou) {
      printf("Parabéns! Você acertou!\n");
      printf("Jogue de novo, você é um bom jogador!\n");

      break;
    } else {

      int maior = chute > numerosecreto;

      if(maior) {
        printf("Seu chute foi maior que o número secreto\n");
      } else {
        printf("Seu chute foi menor que o número secreto\n");
      }

      printf("Você errou!\n");
      printf("Mas não desanime, tente de novo!\n");
    }

  }

  printf("Fim de jogo!\n");

}
