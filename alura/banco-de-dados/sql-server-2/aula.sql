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


# aula 5
select a.nome, c.nome, avg(n.nota) media_curso, (select avg(n2.nota) from nota n2) media_geral, avg(n.nota) - (select avg(n1.nota) from nota n1) diferenca from nota n join resposta r on n.resposta_id = r.id join exercicio e on r.exercicio_id = e.id join secao s on e.secao_id = s.id join curso c on s.curso_is = c.id join aluno a on r.aluno_id = a.id group by c.nome, a.nome;

select a.nome, (select count(r.id) from resposta r where r.aluno_id = a.id) quantidade _respostas from aluno a;

select a.nome, (select count(m.id) from matricula m where m.aluno_id = a.id) from aluno a;

select a.nome, (select count(m.id) from matricula m where m.aluno_id = a.id) quantidade_matriculas, (select count(r.id) from resposta r where r.aluno_id = a.id) quantidade_respostas from aluno a;

# aula 6
select a.nome, count(r.id) from aluno a join resposta r on r.aluno_id = a.id group by a.nome;
select count(*) from aluno;
select * from aluno;
select * from resposta where aluno_id in (6, 8);

select a.id, a.nome, r.aluno_id, r.respostada_dada from aluno a
join resposta r on r.aluno_id = a.id;

select a.nome, r.resposta_dada from aluno a left join resposta r on r.aluno_id = a.id;

select a.nome, count(r.id) quantidade_respostas from aluno a left join resposta r on r.aluno_id = a.id group by a.nome;

select a.nome, r.resposta_dada from aluno a right join resposta r on r.aluno_id = r.id;

select * from aluno where id = 50000;
insert into resposta (exercicio_id, aluno_id, resposta_dada) values(1, 50000 "sql server");

select a.nome, r.resposta_dada from aluno a right join resposta r on r.aluno_id = r.id;

delete from resposta where aluno_id = 50000;


select a.nome, count(m.id) quantidade_matriculas from aluno a left join matricula m on m.aluno_id = m.id group by a.nome;

select a.nome, (select count(m.id) from matricula m where m.aluno_id = a.id) from aluno a;

select a.nome, (select count(r.id) from resposta r where r.aluno_id = a.id) from aluno a;


select a.nome, (select count(m.id) from matricula m where m.aluno_id = a.id) quantidade_matriculas, (select count(r.id) from resposta r where r.aluno_id = a.id) quantidade_respostas from aluno a;

select a.nome, r.resposta_dada, m.id from aluno a left join matricula m on m.aluno_id = a.id left join resposta r on r.aluno_id = a.id;

select * from aluno;

select * from matricula where aluno_id = 1;

select * from resposta where aluno_id = 1;

select a.nome, count(distinct r.id) quantidade_respostas, count(distinct m.id) quantidade_matriculas from aluno a left join matricula m on m.aluno_id = a.id left join resposta r on r.aluno_id = a.id group by a.nome;


























