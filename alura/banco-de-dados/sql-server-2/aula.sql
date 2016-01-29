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

# aula 2
select * from curso;
select * from secao;
select * from exercicio;
select * from resposta;
select * from nota;
select c.nome, avg(n.nota) from nota n join resposta r on r.id = n.resposta_id join exercicio e on e.id = r.exercicio_id join secao s on s.id = e.secao_id join curso c on c.id = s.curso_id group by c.nome;
select c.nome, count(e.id) as contagem from exercicio e join secao s on s.id = e.secao_id join curso c on c.id = s.curso_id group by c.nome;
select c.nome, count(a.id) as quantidade from curso c join matricula m on m.curso_id = c.id join aluno a on a.id = m.aluno_id group by c.nome;

# aula 3
select a.nome, c.nome, avg(n.nota) from nome n join resposta r on r.id = n.resposta_id join exercicio e on e.id = r.exercicio_id join secao s on s.id = e.secao_id join curso c on c.id = s.curso_id join aluno a on a.id = a.aluno_id group by a.nome, c.nome;

select a.nome, c.nome, avg(n.nota) from nome n join resposta r on r.id = n.resposta_id join exercicio e on e.id = r.exercicio_id join secao s on s.id = e.secao_id join curso c on c.id = s.curso_id join aluno a on a.id = a.aluno_id group by a.nome, c.nome having avg(n.nota) < 5;

select a.nome, c.nome, avg(n.nota) from nome n join resposta r on r.id = n.resposta_id join exercicio e on e.id = r.exercicio_id join secao s on s.id = e.secao_id join curso c on c.id = s.curso_id join aluno a on a.id = a.aluno_id group by a.nome, c.nome having avg(n.nota) => 5;

select c.nome, count(a.id) from curso c join matricula m on m.curso_id = c.id join aluno a on a.aluno_id = a.id group by c.nome having count(a.id) < 10;

# aula 4
sp_help matricula;

select distinct tipo from matricula;

select c.nome, count(m.id) quantidade, m.tipo from matricula m join curso c on m.curso_id = c.id where m.tipo in ('PAGA_PJ', 'PAGA_PF') group by c.nome, m.tipo;

select * from aluno;

select a.nome, c.nome from curso c join matricula m on m.curso_id = c.id join aluno a on m.aluno_id = a.id where m.aluno_id in (1, 3, 4) order by a.nome;

select a.nome, c.nome from curso c join matricula m on m.curso_id = c.id join aluno a on m.aluno_id = a.id where c.id in (1,4) order by a.nome;














