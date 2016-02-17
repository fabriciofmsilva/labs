package caelum.com.br.cadastro;

import android.util.Log;
import android.widget.EditText;
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

    public FormularioHelper(FormularioActivity activity) {
        campoNome = (EditText) activity.findViewById(R.id.nome);
        campoSite = (EditText) activity.findViewById(R.id.site);
        campoEndereco = (EditText) activity.findViewById(R.id.endereco);
        campoTelefone = (EditText) activity.findViewById(R.id.telefone);
        campoNota = (RatingBar) activity.findViewById(R.id.nota);
    }

    public Aluno pegaAlunoDoFormulario() {
        Aluno aluno = new Aluno();

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
        campoNome.setText(alunoParaSerAlterado.getNome());
        campoSite.setText(alunoParaSerAlterado.getSite());
        campoEndereco.setText(alunoParaSerAlterado.getEndereco());
        campoTelefone.setText(alunoParaSerAlterado.getTelefone());
        campoNota.setRating(alunoParaSerAlterado.getNota().floatValue());
    }

}
