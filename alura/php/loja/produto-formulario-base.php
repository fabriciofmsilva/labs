<tr>
  <td>Nome:</td>
  <td><input class="form-control" name="nome" type="text" value="<?=$produto['nome']?>"></td>
</tr>
<tr>
  <td>Preco:</td>
  <td><input class="form-control" name="preco" type="number" value="<?=$produto['preco']?>"></td>
</tr>
<tr>
  <td>Descrição:</td>
  <td><textarea class="form-control" name="descricao"><?=$produto['descricao']?></textarea></td>
</tr>
<tr>
  <td></td>
  <td>
    <input name="usado" type="checkbox" value="true" <?=$usado?>> Usado
  </td>
</tr>
<tr>
  <td>Categoria:</td>
  <td>
    <select class="form-control" name="categoria_id">
    <?php foreach($categorias as $categoria) :
          $essaEhACategoria = $produto['categoria_id'] == $categoria->getId();
          $selecao = $essaEhACategoria ? 'selected="selected"' : '';
    ?>
      <option value="<?=$categoria->getId()?>" <?=$selecao?>>
        <?=$categoria->getNome()?>
      </option>
    <?php endforeach ?>
    </select>
  </td>
</tr>
<tr>
  <td>Tipo do produto</td>
  <td>
    <select name="tipoProduto">
      <optgroup label="Livros">
        <option value="LivroFisico">Livro Fisico</option>
        <option value="Ebook">E-book</option>
      </optgroup>
    </select>
  </td>
</tr>
<tr>
  <td>ISBN (caso seja um livro)</td>
  <td><input name="isbn" type="text"></td>
</tr>
