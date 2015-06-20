CREATE DATABASE loja;
USE loja;
CREATE TABLE produtos (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), preco DECIMAL(10, 2));
SELECT * FROM produtos;
INSERT INTO produtos VALUES (1, 'carro', 20000);
INSERT INTO produtos VALUES (2, 'morocicleta', 10000);
INSERT INTO produtos (nome, preco) VALUES ('bicicleta', 300);
# update
ALTER TABLE produtos ADD COLUMN descricao TEXT;
SELECT * FROM produtos;
UPDATE produtos SET descricao = "Descricao deste produto";
SELECT * FROM produtos;
# categorias
CREATE TABLE categorias (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255));
INSERT INTO categorias (nome) VALUES ("esporte"), ("escolar"), ("mobilidade");
SELECT * FROM categorias;
INSERT INTO categorias (nome) VALUES ("guloseimas");
ALTER TABLE produtos ADD COLUMN categoria_id INTEGER;
UPDATE produtos SET categoria_id = 3;
UPDATE produtos SET categoria_id = 4 WHERE id = 20;
