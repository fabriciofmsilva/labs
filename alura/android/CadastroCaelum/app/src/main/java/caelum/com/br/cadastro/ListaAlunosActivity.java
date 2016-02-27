package caelum.com.br.cadastro;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.ContextMenu;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.List;
import java.util.logging.ConsoleHandler;

import caelum.com.br.cadastro.dao.AlunoDAO;
import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 1/30/16.
 */
public class ListaAlunosActivity extends Activity {

    private ListView listaAlunos;
    private Aluno aluno;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.listagem_alunos);

        listaAlunos = (ListView) findViewById(R.id.lista);
        registerForContextMenu(listaAlunos);

        listaAlunos.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapter, View view, int position, long id) {
                Aluno alunoParaSerAlterado = (Aluno) adapter.getItemAtPosition(position);

                Intent irParaOFormulario = new Intent(ListaAlunosActivity.this, FormularioActivity.class);
                irParaOFormulario.putExtra("alunoSelecionado", alunoParaSerAlterado);

                startActivity(irParaOFormulario);
            }
        });

        listaAlunos.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> adapter, View view, int position, long id) {
                aluno = (Aluno) adapter.getItemAtPosition(position);

                return false;
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();

        carregaLista();
    }

    private void carregaLista() {
        AlunoDAO dao = new AlunoDAO(this);
        List<Aluno> alunos = dao.getLista();
        ArrayAdapter<Aluno> adapter = new ArrayAdapter<Aluno>(this, android.R.layout.simple_list_item_1, alunos);
        listaAlunos.setAdapter(adapter);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_lista_alunos, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()) {
            case R.id.novo:
                Intent irParaFormulario = new Intent(this, FormularioActivity.class);
                startActivity(irParaFormulario);
                break;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        MenuItem ligar = menu.add("Ligar");
        ligar.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem item) {
                Intent irParaATelaDeDiscagem = new Intent();
                irParaATelaDeDiscagem.setAction(Intent.ACTION_CALL);

                Uri telefoneDoAluro = Uri.parse("tel:" + aluno.getTelefone());
                irParaATelaDeDiscagem.setData(telefoneDoAluro);

                startActivity(irParaATelaDeDiscagem);
                return false;
            }
        });

        menu.add("Enviar SMS");
        menu.add("Achar no Mapa");
        MenuItem site = menu.add("Navegar no site");
        site.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem item) {
                Intent abrirOSiteDoAluno = new Intent(Intent.ACTION_VIEW);

                Uri siteDoAluno = Uri.parse("http://" + aluno.getSite());
                abrirOSiteDoAluno.setData(siteDoAluno);

                startActivity(abrirOSiteDoAluno);
                return false;
            }
        });

        MenuItem deletar = menu.add("Deletar");
        deletar.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem item) {
                AlunoDAO dao = new AlunoDAO(ListaAlunosActivity.this);
                dao.deletar(aluno);
                dao.close();

                carregaLista();
                return false;
            }
        });

        menu.add("Enviar E-mail");

        super.onCreateContextMenu(menu, v, menuInfo);
    }
}
