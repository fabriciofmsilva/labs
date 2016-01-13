#include <stdio.h>
#include <stdlib.h>

/*
 * Primeiro Programa
 */
int main(int argc, char** argv) {
  int x = 10; // declara variável x
  int a = 1, b = 2;
  printf("Oi mundo!\n");
  printf("Valor de x:%d\n", x);
  x++;
  printf("Valor de x:%d\n", x);
  printf("a:%d \tb:%d\tc:%d\n", a, b, 3);
  printf("%5d\n%5d\n%5d", 1, 10, 100);

  char ch = 'c';
  printf("Juros de %d%%\n", 10);
  printf("\\ \" \n");
  printf("%f\n", 40.345);
  printf("%.2f\n", 40.345);
  printf("%.1f\n", 40.345);
  printf("char: %c\n", ch);
  printf("decimal: %d\n", ch);
  printf("octal: %o\n", ch);
  printf("hexa: %x\n", ch);
  printf("%x\n", &ch);

  // para saber o tamanho de uma variável usamos
  // o comando sizeof(tipo) ou sizeof(variável)
  printf("TIPO\t\tTAMANHO\n");
  printf("char\t\t%d byte(s)\n", sizeof(char));
  printf("int\t\t%d byte(s)\n", sizeof(int));
  printf("float\t\t%d byte(s)\n", sizeof(float));
  printf("double\t\t%d byte(s)\n", sizeof(double));
  printf("long double\t%d byte(s)\n", sizeof(long double));
  printf("short int\t%d byte(s)\n", sizeof(short int));
  printf("long int\t%d byte(s)\n", sizeof(long int));
  printf("unsigned short\t%d byte(s)\n", sizeof(unsigned short));
  printf("unsigned long\t%d byte(s)\n", sizeof(unsigned long));
  printf("signed long\t%d byte(s)\n", sizeof(signed long int));
  printf("unsigned short\t%d byte(s)\n", sizeof(signed short));
  printf("unsigned long\t%d byte(s)\n", sizeof(signed long));
  return (EXIT_SUCCESS);
}
