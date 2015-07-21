<?php
  error_reporting(0);

  require "ConnectionFactory.php";

  $factory = new ConnectionFactory();

  $conexao = $factory->getConnection();

  $select = "SELECT * FROM cursos";

  var_dump($conexao);
?>
