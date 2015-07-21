<?php
  class ConnectionFactory {

    public function getConnection() {

      $host = "localhost";
      $user = "root";
      $pass = "123";
      $banco = "alura";

      $tipoBanco = parse_ini_file("config.ini");
      $tipoBanco = $tipoBanco["tipoBanco"];

      if($tipoBanco == "mysql") {
        $conexao = mysqli_connect($host, $user, $pass, $banco);
      } else if($tipoBanco == "postgree" {
        $conexao = pg_connect("host=meuHost port=5432 dbname=meuBanco user=meuUsuario password=meuBanco");
      }

      return $conexao;

    }
  }
?>
