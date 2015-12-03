create database controle_compras;

use controle_compras;

create table compras
(
  id int primary key identity not null,
  valor decimal(18, 2) null,
  data date null,
  observacoes nvarchar(200) null,
  recebida bit null
);

sp_help compras;

insert into compras (valor, data, observacoes, recebida)
values (200, '2008-02-19', 'MATERIAL ESCOLAR', 1);

insert into compras (valor, data, observacoes, recebida)
values (3500, '2008-05-21', 'TELEVISAO', 1);

select observacoes, valor from compras;

select * from compras;

// roda o script

select * from compras;

select * from compras
where valor < 500;

select * from compras
where valor > 1500;

select * from compras
where valor > 1500
and recebido = 0;

select * from compras
where valor > 1500
or valor < 500;

select * from compras
where valor = 3500;

select * from compras;

select * from compras
where observacoes = 'PARCELA DA CASA'
or observacoes = 'PARCELA DO CARRO';

select * from compras
where observacoes like 'PARCELA%  ';
