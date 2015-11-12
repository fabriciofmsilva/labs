# MongoDB - Aula 01 - Exercício
autor: Fabrício Silva


## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T22:36:00.276-0200  connected to: localhost
2015-11-11T22:36:00.277-0200  dropping: be-mean.restaurantes
2015-11-11T22:36:01.573-0200  imported 25359 documents
```


## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
