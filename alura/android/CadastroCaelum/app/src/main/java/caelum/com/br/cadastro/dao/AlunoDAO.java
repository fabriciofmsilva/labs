package caelum.com.br.cadastro.dao;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.ArrayList;
import java.util.List;

import caelum.com.br.cadastro.modelo.Aluno;

/**
 * Created by fabriciosilva on 2/10/16.
 */
public class AlunoDAO extends SQLiteOpenHelper {

    private static final String DATABASE = "NomeDoBanco";
    private static final int VERSAO = 1;
    private static final String TABELA = "Alunos";

    public AlunoDAO(Context context) {
        super(context, DATABASE, null, VERSAO);
    }

    @Override
    public void onCreate(SQLiteDatabase database) {
        String sql = "CREATE TABLE " + TABELA + " ("
                + "id INTEGER PRIMARY KEY, "
                + "nome TEXT UNIQUE NOT NULL, "
                + "telefone TEXT, "
                + "endereco TEXT, "
                + "site text, "
                + "nota REAL, "
                + "caminhoFoto Text"
                + ");";

        database.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase database, int oldVersion, int newVersion) {
        String sql = "DROP TABLE IF EXISTS " + TABELA;
        database.execSQL(sql);
        onCreate(database);
    }

    public void insere(Aluno aluno) {
        ContentValues cv = new ContentValues();
        cv.put("nome", aluno.getNome());
        cv.put("telefone", aluno.getTelefone());
        cv.put("endereco", aluno.getEndereco());
        cv.put("site", aluno.getSite());
        cv.put("nota", aluno.getNota());
        cv.put("caminhoFoto", aluno.getCaminhoFoto());

        getWritableDatabase().insert(TABELA, null, cv);
    }

    public List<Aluno> getLista() {
        List<Aluno> alunos = new ArrayList<Aluno>();
        String sql = "SELECT * FROM " + TABELA + ";";
        Cursor c = getReadableDatabase().rawQuery(sql, null);

        while(c.moveToNext()) {
            Aluno aluno = new Aluno();
            aluno.setId(c.getLong(c.getColumnIndex("id")));
            aluno.setNome(c.getString(c.getColumnIndex("nome")));
            aluno.setTelefone(c.getString(c.getColumnIndex("telefone")));
            aluno.setEndereco(c.getString(c.getColumnIndex("endereco")));
            aluno.setSite(c.getString(c.getColumnIndex("site")));
            aluno.setNota(c.getDouble(c.getColumnIndex("nota")));
            aluno.setCaminhoFoto(c.getString(c.getColumnIndex("caminhoFoto")));

            alunos.add(aluno);
        }

        return alunos;
    }

    public void deletar(Aluno aluno) {
        String[] args = { Long.toString(aluno.getId()) };
        getWritableDatabase().delete("Alunos", "id=?", args);
    }

    public void atualizar(Aluno aluno) {
        ContentValues cv = new ContentValues();
        cv.put("nome", aluno.getNome());
        cv.put("telefone", aluno.getTelefone());
        cv.put("endereco", aluno.getEndereco());
        cv.put("site", aluno.getSite());
        cv.put("nota", aluno.getNota());
        cv.put("caminhoFoto", aluno.getCaminhoFoto());

        String[] args = {Long.toString(aluno.getId())};

        getWritableDatabase().update("Alunos", cv, "id=?", args);
    }
}
