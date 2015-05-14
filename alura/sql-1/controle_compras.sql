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
# mysql -uroot -p controle_compras < cap3.sql
UPDATE compras SET observacoes = 'PREPARANDO O NATAL' WHERE data = '2010-12-20';
UPDATE compras SET valor = valor + 10 WHERE data < '2009-06-01';
UPDATE compras SET observacoes = 'ENTREGUE ANTES DE 2011', recebido = TRUE WHERE data BETWEEN '2009-07-01' AND '2010-07-01';
DELETE FROM compras WHERE data BETWEEN '2009-03-05' AND '2009-03-20';
SELECT * FROM compras WHERE NOT valor = 108.00;
#
ALTER TABLE compras ADD COLUMN forma_pagto ENUM('CARTAO', 'BOLETO', 'DINHEIRO');
SELECT * FROM compras;
UPDATE compras SET forma_pagto = 'BOLETO' WHERE forma_pagto IS NULL;
ALTER TABLE compras MODIFY COLUMN recebido TINYINT(1) DEFAULT '0';
ALTER TABLE compras MODIFY COLUMN observacoes VARCHAR(255) NOT NULL;
-- CREATE TABLE compras (
--   id int NOT NULL AUTO_INCREMENT,
--   valor decimal(10,2),
--   data datetime,
--   observacoes text,
--   recebido tinyint(1) DEFAULT 1,
--   forma_pagto ENUM('DINHEIRO', 'CARTAO', 'BOLETO')
--   PRIMARY KEY (id)
-- );
#
SELECT AVG(valor) FROM compras WHERE DATA < '2009-05-12';
SELECT forma_pagto, SUM(valor) FROM compras WHERE data < '2010-10-10' GROUP BY forma_pagto;
SELECT COUNT(valor) FROM compras WHERE data < '2009-05-12' AND recebido = 1;
SELECT forma_pagto, recebido, SUM(valor) FROM compras GROUP BY forma_pagto, recebido;
