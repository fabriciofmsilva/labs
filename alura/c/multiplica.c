#include <stdio.h>

int main() {
  int x;
  int y;

  printf("Digite um número ");
  scanf("%d", &x);

  printf("Digite outro número ");
  scanf("%d", &y);

  int resultado = x * y;
  printf("A multiplicação de %d por %d é igual a %d\n", x, y, resultado);
}
