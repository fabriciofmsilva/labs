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


# Aula 3
select * from compras;
sp_help compras;

insert into compras values(150, '2015-04-15', 'Churrasqueira', 1);
select * from compras;

insert into compras values(150, '2015-04-15', 1);

insert into compras (valor, data, recebida) values(150, '2015-04-15', 1);
select * from compras;

delete from compras where observacoes is null;

select * from compras where observacoes is null;

alter table compras alter column observacoes nvarchar(400) not null;

insert into compras (valor, data, recebido) values(10, '2015-06-10', 1);

alter table compras add default '0' for recebida;

insert into compras (valor, data, observacoes) values (200, '2015-10-04', 'testando default');

select * from compras where observacoes = 'testando default';


# Aula 4
select * from compras;
select sum(valor) from compras where recebida = 1;
select count(*) from compras where recebida = 1;
select recebida, sum(valor) as soma from compras group by recebida;
select recebida, sum(valor) as soma from compras where valor < 1000 group by recebida;
select mounth(data) as mes, year(data) as ano, recebida, sum(valor) as soma from compras where valor < 1000 group by recebida, mounth(data), year(data);
select mounth(data) as mes, year(data) as ano, recebida, sum(valor) as soma from compras where valor < 1000 group by recebida, mounth(data), year(data) order by year(data);
select mounth(data) as mes, year(data) as ano, recebida, avg(valor) as media from compras where valor < 1000 group by recebida, mounth(data), year(data) order by year(data);
