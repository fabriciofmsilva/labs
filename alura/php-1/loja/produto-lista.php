<?php include("cabecalho.php");
      include("conecta.php");
      include("banco-produto.php");

  $produtos = listaProdutos($conexao);
?>

<?php
  if(array_key_exists("removido", $_GET) && $_GET['removido'] == true) :
?>
  <p class="alert-success">Produto apagado com sucesso.</p>
<?php
  endif
?>

<table class="table table-striped table-bordered">
  <?php
    foreach($produtos as $produto) :
  ?>
  <tr>
    <td><?= $produto['nome'] ?></td>
    <td><?= $produto['preco'] ?></td>
    <td><a class="btn btn-danger" href="/remove-produto.php?id=<?=$produto['id']?>">remover</a></td>
  </tr>
  <?php
    endforeach
  ?>
</table>

<?php include("rodape.php"); ?>
