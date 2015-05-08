# mysql -uroot -p
CREATE DATABASE controle_compras;
# USE controle_compras;
CREATE TABLE compras (id INT AUTO_INCREMENT KEY PRIMARY, valor DOUBLE, data DATE, recebido BOOLEAN, descricao VARCHAR(255), observacoes VARCHAR(255));
# mysql -uroot -p controle_compras < cap2.sql
SELECT * FROM compras;
SELECT valor, observacoes FROM compras WHERE data >= '2008-12-15';
SELECT * FROM compras WHERE data >= '2008-12-15' AND data < '2010-12-15';
SELECT * FROM compras WHERE valor >= 15 AND valor <= 35 AND observacoes LIKE 'lanchonete%';
SELECT * FROM compras WHERE recebido = 1;
SELECT * FROM compras WHERE recebido = 0;
INSERT INTO compras (valor, data, observacoes, recebido) VALUES (100.0, '2010-09-08', 'COMIDA', TRUE);
SELECT * FROM compras WHERE valor > 5000 OR recebido = 1;
SELECT * FROM compras WHERE (valor >= 1000 AND valor <= 3000) OR (valor > 5000);
