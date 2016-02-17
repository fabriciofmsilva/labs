package caelum.com.br.cadastro.modelo;

import java.io.Serializable;

/**
 * Created by fabriciosilva on 2/10/16.
 */
public class Aluno implements Serializable {

    private String nome;
    private String telefone;
    private String endereco;
    private String site;
    private Double nota;
    private String caminhoFoto;
    private long id;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public void setCaminhoFoto(String caminhoFoto) {
        this.caminhoFoto = caminhoFoto;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {

        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getSite() {
        return site;
    }

    public Double getNota() {
        return nota;
    }

    public String getCaminhoFoto() {
        return caminhoFoto;
    }

    public long getId() {
        return id;
    }

    @Override
    public String toString() {
        return id + " - " + nome;
    }
}
