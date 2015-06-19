CREATE DATABASE loja;
USE loja;
CREATE TABLE produtos (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), preco DECIMAL(10, 2));
SELECT * FROM produtos;
INSERT INTO produtos VALUES (1, 'carro', 20000);
INSERT INTO produtos VALUES (2, 'morocicleta', 10000);
INSERT INTO produtos (nome, preco) VALUES ('bicicleta', 300);
