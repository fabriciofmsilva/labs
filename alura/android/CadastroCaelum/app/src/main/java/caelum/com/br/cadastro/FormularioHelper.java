package caelum.com.br.cadastro;

import android.widget.EditText;
import android.widget.RatingBar;

import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 2/10/16.
 */
public class FormularioHelper {

    private final EditText campoNome;
    private final EditText campoSite;
    private final EditText campoEndereco;
    private final EditText campoTelefone;
    private final RatingBar campoNota;
    private final Aluno aluno;

    public FormularioHelper(FormularioActivity activity) {
        aluno = new Aluno();
        
        campoNome = (EditText) activity.findViewById(R.id.nome);
        campoSite = (EditText) activity.findViewById(R.id.site);
        campoEndereco = (EditText) activity.findViewById(R.id.endereco);
        campoTelefone = (EditText) activity.findViewById(R.id.telefone);
        campoNota = (RatingBar) activity.findViewById(R.id.nota);
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

}
