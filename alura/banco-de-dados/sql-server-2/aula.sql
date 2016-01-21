# aula 1
create database sql_avancado;
# rodar o script da aula
use sql_avancado;
sp_help aluno;
sp_help curso;
sp_help exercicio;
sp_help matricula;
sp_help nota;
sp_help resposta;
sp_help secao;
select a.nome, c.nome from aluno a join matricula m on m.aluno_id = a.id join curso c on m.curso_id = c.id order by a.nome;
select count(*) from aluno;
select a.nome from aluno a where not exists(select m.id from matricula m where m.aluno_id = a.id);
select e.id, e.pergunta from exercicio e where not exists(select r.id from resposta r where r.exercicio_id = e.id);
select c.nome from curso c where not exists(select m.id from matricula m where m.curso_id = c.id);
select a.nome, c.nome from aluno a join matricula m on m.aluno_id = a.id join curso c on m.curso_id = c.id where not exists(select r.aluno_id from resposta r where r.aluno_id = a.id);
select a.nome from aluno a join resposta r on r.aluno_id = a.id where not exists(select m.aluno_id from matricula m where m.aluno_id = a.id);
