<?php
require_once("classe/Categoria.php");
require_once("classe/Produto.php");
require_once("logica-usuario.php");
verificaUsuario();
require_once("banco-produto.php");
require_once("cabecalho.php");

$produto = new Produto;
$categoria = new Categoria;
$categoria->id = $_POST['categoria_id'];
$produto->nome = $_POST["nome"];
$produto->preco = $_POST["preco"];
$produto->descricao = $_POST["descricao"];
$produto->categoria = $categoria;
if(array_key_exists('usado', $_POST)) {
  $usado = "true";
} else {
  $usado = "false";
}
$produto->usado = $usado;

if(insereProduto($conexao, $produto)) { ?>
  <p class="text-success">O produto <?= $produto->nome; ?>, <?= $produto->preco; ?> adicionado com sucesso!</p>
<?php } else {
  $msg = mysqli_error($conexao);
?>
  <p class="text-danger">O produto <?= $produto->nome ?> não foi adicionado: <?= $msg ?></p>
<?php } ?>

<?php require_once("rodape.php"); ?>
