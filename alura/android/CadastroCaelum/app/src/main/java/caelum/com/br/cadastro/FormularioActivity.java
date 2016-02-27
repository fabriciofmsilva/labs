package caelum.com.br.cadastro;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.File;
import java.io.Serializable;

import caelum.com.br.cadastro.dao.AlunoDAO;
import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 2/3/16.
 */
public class FormularioActivity extends Activity {

    private String caminhoArquivo;
    private FormularioHelper helper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.formulario);

        helper = new FormularioHelper(this);

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

        ImageView foto = helper.getFoto();
        foto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent irParaCamera = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

                caminhoArquivo = getExternalFilesDir(null) + "/" + System.currentTimeMillis() + ".png";
                File arquivo = new File(caminhoArquivo);

                Uri localFoto = Uri.fromFile(arquivo);
                irParaCamera.putExtra(MediaStore.EXTRA_OUTPUT, localFoto);

                startActivityForResult(irParaCamera, 123);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 123) {
            if (resultCode == Activity.RESULT_OK) {
                helper.carregaImagem(caminhoArquivo);
            } else {
                caminhoArquivo = null;
            }
        }
    }
}
