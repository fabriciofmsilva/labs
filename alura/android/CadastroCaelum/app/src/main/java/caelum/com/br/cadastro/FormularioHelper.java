package caelum.com.br.cadastro;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.Image;
import android.util.Log;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RatingBar;

import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 2/10/16.
 */
public class FormularioHelper {

    EditText campoNome;
    EditText campoSite;
    EditText campoEndereco;
    EditText campoTelefone;
    RatingBar campoNota;
    ImageView foto;
    private Aluno aluno;

    public FormularioHelper(FormularioActivity activity) {
        campoNome = (EditText) activity.findViewById(R.id.nome);
        campoSite = (EditText) activity.findViewById(R.id.site);
        campoEndereco = (EditText) activity.findViewById(R.id.endereco);
        campoTelefone = (EditText) activity.findViewById(R.id.telefone);
        campoNota = (RatingBar) activity.findViewById(R.id.nota);
        foto = (ImageView) activity.findViewById(R.id.foto);
        aluno = new Aluno();
    }

    public Aluno pegaAlunoDoFormulario() {
        String nome = campoNome.getText().toString();
        String site = campoSite.getText().toString();
        String endereco = campoEndereco.getText().toString();
        String telefone = campoTelefone.getText().toString();
        int nota = campoNota.getProgress();

        aluno.setNome(nome);
        aluno.setTelefone(telefone);
        aluno.setEndereco(endereco);
        aluno.setSite(site);
        aluno.setNota(Double.valueOf(nota));

        return aluno;
    }

    public void colocaAlunoNoFormulario(Aluno alunoParaSerAlterado) {
        aluno = alunoParaSerAlterado;

        campoNome.setText(alunoParaSerAlterado.getNome());
        campoSite.setText(alunoParaSerAlterado.getSite());
        campoEndereco.setText(alunoParaSerAlterado.getEndereco());
        campoTelefone.setText(alunoParaSerAlterado.getTelefone());
        campoNota.setRating(alunoParaSerAlterado.getNota().floatValue());

        if (aluno.getCaminhoFoto() != null) {
            carregaImagem(aluno.getCaminhoFoto());
        }
    }

    public ImageView getFoto() {
        return foto;
    }

    public void carregaImagem(String caminhoArquivo) {
        aluno.setCaminhoFoto(caminhoArquivo);

        Bitmap imagem = BitmapFactory.decodeFile(caminhoArquivo);
        Bitmap imagemReduzida = Bitmap.createScaledBitmap(imagem, 100, 100, true);
        foto.setImageBitmap(imagemReduzida);
    }
}
