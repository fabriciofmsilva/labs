<?php
require_once("banco-produto.php");
require_once("cabecalho.php");
?>

<table class="table table-striped table-bordered">
  <?php
    $produtos = listaProdutos($conexao);
    foreach($produtos as $produto) :
  ?>
  <tr>
    <td><?= $produto->getNome() ?></td>
    <td><?= $produto->getPreco() ?></td>
    <td><?= $produto->valorComDesconto() ?></td>
    <td><?= substr($produto->getDescricao(), 0, 40) ?></td>
    <td><?= $produto->getCategoria()->getNome() ?></td>
    <td><a class="btn btn-primary" href="produto-altera-formulario.php?id=<?=$produto->getId()?>">alterar</a></td>
    <td>
      <form action="remove-produto.php" method="post">
        <input name="id" type="hidden" value="<?=$produto->getId()?>">
        <button class="btn btn-danger">remover</button>
      </form>
    </td>
  </tr>
  <?php
    endforeach
  ?>
</table>

<?php require_once("rodape.php"); ?>
