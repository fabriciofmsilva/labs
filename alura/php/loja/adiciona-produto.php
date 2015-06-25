<?php
require_once("class/Categoria.php");
require_once("class/Produto.php");
require_once("logica-usuario.php");
verificaUsuario();
require_once("banco-produto.php");
require_once("cabecalho.php");

$categoria = new Categoria;
$categoria->setId($_POST['categoria_id']);

if(array_key_exists('usado', $_POST)) {
  $usado = "true";
} else {
  $usado = "false";
}

$produto = new Produto($_POST["nome"], $_POST["preco"], $_POST["descricao"], $categoria, $usado);

if(insereProduto($conexao, $produto)) { ?>
  <p class="text-success">O produto <?= $produto->getNome(); ?>, <?= $produto->getPreco(); ?> adicionado com sucesso!</p>
<?php } else {
  $msg = mysqli_error($conexao);
?>
  <p class="text-danger">O produto <?= $produto->getNome() ?> não foi adicionado: <?= $msg ?></p>
<?php } ?>

<?php require_once("rodape.php"); ?>
