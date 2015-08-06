#include <stdio.h>

void joga(int x) {
  printf("joga %d\n", x);
  x++;
  printf("joga %d\n", x);
}

int main() {

  int tentativas = 0

  printf("main %d\n", tentativas);

  tentativas++;
  printf("main %d\n", tentativas);

  tentativas++;
  printf("main %d\n", tentativas);

  joga(tentativas);

  printf("main %d\n", tentativas);

}
