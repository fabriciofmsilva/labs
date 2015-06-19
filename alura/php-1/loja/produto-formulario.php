<?php include("cabecalho.php") ?>
<h1>Formulário de cadastro</h1>
<form action="adiciona-produto.php">
  <table class="table">
    <tr>
      <td>Nome:</td>
      <td><input class="form-control" name="nome" type="text"></td>
    </tr>
    <tr>
      <td>Preco:</td>
      <td><input class="form-control" name="preco" type="number"></td>
    </tr>
    <tr>
      <td><button class="btn btn-primary" type="submit">Cadastrar</button></td>
    </tr>
  </table>
</form>
<?php include("rodape.php") ?>
