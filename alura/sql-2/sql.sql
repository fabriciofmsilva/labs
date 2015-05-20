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
# aula 3
SELECT c.nome, AVG(n.nota) FROM nota n JOIN resposta r ON r.id = n.resposta_id JOIN exercicio e ON e.id = r.exercicio_id JOIN secao s ON s.id = e.secao_id JOIN curso c ON c.id = s.curso_id GROUP BY c.nome;
SELECT c.nome, COUNT(m.id) FROM curso c JOIN matricula m ON c.id = m.curso_id GROUP BY c.nome;
SELECT c.nome, AVG(n.nota) FROM nota n JOIN resposta r ON r.id = n.resposta_id JOIN exercicio e ON e.id = r.exercicio_id JOIN secao s ON s.id = e.secao_id JOIN curso c ON c.id = s.curso_id JOIN aluno a ON a.id = r.aluno_id WHERE a.nome LIKE "%Silva" OR a.nome LIKE "%Santos" GROUP BY c.nome;
SELECT e.pergunta, COUNT(r.id) FROM exercicio e JOIN resposta r ON e.id = r.exercicio_id GROUP BY e.id;
SELECT e.pergunta, COUNT(r.id) FROM exercicio e JOIN resposta r ON e.id = r.exercicio_id GROUP BY e.id ORDER BY COUNT(r.id) DESC;
SELECT a.nome, c.nome, AVG(n.nota) FROM nota n JOIN resposta r ON r.id = n.resposta_id JOIN exercicio e ON e.id = r.exercicio_id JOIN secao s ON s.id = e.secao_id JOIN curso c ON c.id = s.curso_id JOIN aluno a ON a.id = r.aluno_id GROUP BY c.nome, a.nome;
# aula 4
SELECT a.nome, c.nome, AVG(n.nota) FROM nota n JOIN resposta r ON r.id = n.resposta_id JOIN exercicio e ON e.id = r.exercicio_id JOIN secao s ON s.id = e.secao_id JOIN curso c ON c.id = s.curso_id JOIN aluno a ON a.id = r.aluno_id GROUP BY c.nome, a.nome HAVING AVG(n.nota) < 5;
SELECT c.nome, COUNT(m.id) FROM curso c JOIN matricula m ON c.id = m.curso_id GROUP BY c.nome HAVING COUNT(m.id) > 1;
SELECT c.nome, COUNT(s.id) FROM curso c JOIN secao s ON c.id = s.curso_id GROUP BY c.nome HAVING COUNT(s.id) > 3;
