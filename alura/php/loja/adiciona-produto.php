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
$produto->setNome($_POST["nome"]);
$produto->setPreco($_POST["preco"]);
$produto->setDescricao($_POST["descricao"]);
$produto->setCategoria($categoria);
if(array_key_exists('usado', $_POST)) {
  $usado = "true";
} else {
  $usado = "false";
}
$produto->setUsado($usado);

if(insereProduto($conexao, $produto)) { ?>
  <p class="text-success">O produto <?= $produto->getNome(); ?>, <?= $produto->getPreco(); ?> adicionado com sucesso!</p>
<?php } else {
  $msg = mysqli_error($conexao);
?>
  <p class="text-danger">O produto <?= $produto->getNome() ?> não foi adicionado: <?= $msg ?></p>
<?php } ?>

<?php require_once("rodape.php"); ?>
