package br.com.caelum.fj11.programa;

// import java.io.BufferedReader;
// import java.io.BufferedWriter;
// import java.io.FileInputStream;
// import java.io.FileOutputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import java.io.InputStreamReader;
// import java.io.OutputStream;
// import java.io.OutputStreamWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class TestaJavaIO {
  public static void main(String[] args) throws IOException {
    // InputStream is = new FileInputStream("leitura.txt"); // System.in;
    // InputStreamReader irs = new InputStreamReader(is);
    // BufferedReader br = new BufferedReader(irs);

    // OutputStream os = new FileOutputStream("saida.txt"); // System.out;
    // OutputStreamWriter osw = new OutputStreamWriter(os);
    // BufferedWriter bw = new BufferedWriter(osw);

    // String linha = br.readLine();
    // while(linha != null) {
    //   bw.append(linha);
    //   be.newLine();
    //   //System.out.println(linha);
    //   linha = br.readLine();
    // }

    // br.close();
    // bw.close();

    Scanner sc = new Scanner(new FileInputStream("leitura.txt"));
    PrintStream ps = new PrintStream("saida.txt");

    while(sc.hasNextLine()) {
      String linha = sc.nextLine();
      ps.println(linha);
    }

    sc.close();
    ps.close();

  }
}
