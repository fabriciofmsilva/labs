# mysql -uroot -p
CREATE DATABASE sql2;
# mysql -uroot -p sql2 < sql2.sql
# USE sql2;
SELECT * FROM aluno;
SELECT a.nome FROM aluno a WHERE NOT EXISTS (SELECT m.id FROM matricula m WHERE m.aluno_id = a.id);
SELECT a.nome FROM aluno a WHERE NOT EXISTS (SELECT m.id FROM matricula m WHERE m.aluno_id = a.id AND m.data > now() - INTERVAL 45 day);
# aula 2
SELECT * FROM aluno LIMIT 0,2;
SELECT * FROM aluno WHERE email LIKE '%.com' LIMIT 0,3;
SELECT * FROM aluno WHERE email LIKE '%.com' ORDER BY nome LIMIT 0,2;
SELECT * FROM aluno WHERE nome LIKE '%Silva%';
