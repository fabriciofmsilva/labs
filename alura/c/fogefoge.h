#define CIMA 'w'
#define BAIXO 's'
#define DIREITA 'd'
#define ESQUERDA 'a'
#define BOMBA 'b'

void move(char direcao);
int ehdirecao(char direcao);
int acabou();

void fantasmas();
int praondefantasmavai(int xatual, int yatual,
                       int* xdestino, int* ydestino);

void explodepilula();
