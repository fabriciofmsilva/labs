package caelum.com.br.cadastro;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import java.io.Serializable;

import caelum.com.br.cadastro.dao.AlunoDAO;
import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 2/3/16.
 */
public class FormularioActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.formulario);

        final FormularioHelper helper = new FormularioHelper(this);

        final Aluno alunoParaSerAlterado = (Aluno) getIntent().getSerializableExtra("alunoSelecionado");

        if (alunoParaSerAlterado != null) {
            helper.colocaAlunoNoFormulario(alunoParaSerAlterado);
        }

        final Button botao = (Button) findViewById(R.id.botao);
        botao.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(FormularioActivity.this,
                        "Clicou no button", Toast.LENGTH_LONG).show();

                Aluno aluno = helper.pegaAlunoDoFormulario();

                AlunoDAO dao = new AlunoDAO(FormularioActivity.this);

                if (alunoParaSerAlterado != null) {
                    aluno.setId(alunoParaSerAlterado.getId());
                    botao.setText("Alterar");
                    dao.atualizar(aluno);
                } else {
                    dao.insere(aluno);
                }
                dao.close();

                finish();
            }
        });
    }

}
