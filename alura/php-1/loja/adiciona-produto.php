<?php include("cabecalho.php"); ?>
<?php include("conecta.php"); ?>
<?php
function insereProduto($conexao, $nome, $preco) {
  $query = "INSERT INTO produtos (nome, preco) VALUES ('{$nome}', {$preco})";
  $resultadoDaInsercao = mysqli_query($conexao, $query);
  return $resultadoDaInsercao;
}

$nome = $_GET["nome"];
$preco = $_GET["preco"];

if(insereProduto($conexao, $nome, $preco)) { ?>
  <p class="text-success">O produto <?= $nome; ?>, <?= $preco; ?> adicionado com sucesso!</p>
<?php } else {
  $msg = mysqli_error($conexao);
?>
  <p class="text-danger">O produto <?= $nome ?> não foi adicionado: <?= $msg ?></p>
<?php } ?>

<?php include("rodape.php"); ?>
