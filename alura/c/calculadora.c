#include <stdio.h>

int main() {
  int operador;
  int operandoa;
  int operandob;
  int resultado;

  scanf("%d", &operador);
  scanf("%d", &operandoa);
  scanf("%d", &operandob);

  if(operador == 1) {
    resultado = operandoa + operandob;
  } else if(operador == 2) {
    resultado = operandoa - operandob;
  } else if(operador == 3) {
    resultado = operandoa / operandob;
  } else if(operador == 4) {
    resultado = operandoa * operandob;
  }

  printf("Resultado: %d\n", resultado);
}
