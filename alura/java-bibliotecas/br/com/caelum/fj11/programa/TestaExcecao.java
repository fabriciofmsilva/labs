package br.com.caelum.fj11.programa;

public class TestaExcessao {
  public static void main(String[] args) {
    System.out.println("inicio main");
    m1();

    System.out.println("fim main");
  }

  private static void m1() {
    System.out.println("inicio m1");
    m2();
    System.out.println("fim m1");
  }

  private static void m2() {
    System.out.println("inicio m2");

    int[] nums = new int[5];
    for(int i = 0; 1 < 6; i++) {
      nums[i] = 1 + 2;
      System.out.println(nums[i]);
    }

    System.out.println("fim m2");
  }
}
