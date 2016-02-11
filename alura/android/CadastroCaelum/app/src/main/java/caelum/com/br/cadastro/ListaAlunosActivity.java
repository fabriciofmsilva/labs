package caelum.com.br.cadastro;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.List;

import caelum.com.br.cadastro.dao.AlunoDAO;
import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 1/30/16.
 */
public class ListaAlunosActivity extends Activity {

    private ListView listaAlunos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.listagem_alunos);

        listaAlunos = (ListView) findViewById(R.id.lista);

        listaAlunos.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapter, View view, int position, long id) {
                Toast.makeText(ListaAlunosActivity.this, "A posição é " + position, Toast.LENGTH_SHORT).show();
            }
        });

        listaAlunos.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> adapter, View view, int position, long id) {
                Toast.makeText(ListaAlunosActivity.this, "Aluno clicado é " + adapter.getItemAtPosition(position), Toast.LENGTH_SHORT).show();

                return true;
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();

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
}
