# Aula 1
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

# Aula 2
select * from compras;

select valor, observacoes
from compra
where valor <= 1000;

select valor, observacoes
from compra
where valor <= 1000
and valor >= 2000;

select valor, observacoes
from compra
where valor between 1000 and 2000;

select valor, observacoes
from compra
where valor between 1000 and 2000
and valor between '2015-01-01' and '2015-03-31';

select id, valor, observacoes
from compra
where valor between 1000 and 2000
and valor between '2015-01-01' and '2015-03-31';

update compras
set valor = 1500
where id = 49;

delete from compras
where id = 49;
