# Relações em SQL

### Exercício 01

```sh
a) Explique o que é uma chave estrangeira
 O **FOREIGN KEY** serve para identificar um valor que será puxado de outra tabela. Se relaciona diretamente com a **PRIMARY KEY** da outra tabela.
```

```sh
b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating
VALUES 
("001", "filme bom", 8.2, "001"),
("002", "filme muito bom", 10, "002"),
("003", "filme médio", 6.3, "003"),
("004", "filme ruim", 5, "004"),
("005", "filme muito ruim", 9.7, "005");
```

```sh
c)  Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-bianca-mendes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro aponta que não foi possível acessar a foreign key.
```

```sh
d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movies DROP COLUMN rating;
```

```sh
e)Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-bianca-mendes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Não é possível apagar o filme pois o **id** dele é utilizado em outra tabela. Para poder apaga-lo é preciso primeiro apagar a linha que o utiliza como referência numa outra tabela, pra depois apagar na tabela atual.
```



### Exercício 02

´´´sh
a) Explique, com as suas palavras, essa tabela
A tabela irá juntar o registo das outras duas tabelas: **Movie** e **Actor**
´´´

´´´sh
b) Crie, ao menos, 6 relações nessa tabela 

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
("002", "001"),
("003", "005"),
("004", "002"),
("005", "004");
´´´

´´´sh
c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-bianca-mendes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O FOREIGN KEY não encontra o id solicitado na tabela Actor
´´´

´´´sh
d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-bianca-mendes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível apagar o filme pois o **id** dele é utilizado em outra tabela. Para poder apaga-lo é preciso primeiro apagar a linha que o utiliza como referência numa outra tabela, pra depois apagar na tabela atual.
´´´



### Exercício 03

´´´sh
a) a. Explique, com suas palavras, a query acima. O que é o operador ON?
A query agrupa numa única tabela informações de outras tabelas. Depois do ON vem a condição, define qual será a tabela da esquerda e qual será a tabela da direita. 
´´´

´´´sh
b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT Movies.id, Movies.name, Rating.rate FROM Movies 
JOIN Rating ON Movies.id = Rating.movie_id;
´´´



### Exercício 04

´´´sh
a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário.

SELECT Movies.id, Movies.name, Rating.rate, Rating.comment FROM Movies 
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
´´´

´´´sh
b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator.

SELECT movie_id, actor_id, Movies.name FROM Movies
RIGHT JOIN MovieCast ON Movies.id = MovieCast.movie_id; 
´´´

´´´sh
c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda).

SELECT AVG(rate), Movies.name, Movies.id FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id GROUP BY Movies.id;
´´´



### Exercício 05

´´´sh
a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
Cada **JOIN** é responsável por agrupar uma tabela diferente à primeira tabela.
´´´

´´´sh
b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query

SELECT Movies.id as id_movie, Movies.name as name_movie,
Actor.id as id_actor, Actor.name as name_actor
FROM Movies 
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id 
JOIN Actor ON Actor.id = MovieCast.actor_id;
´´´

´´´sh
c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.

> Error Code: 1054. Unknown column 'm' in 'field list'

Na query esta *m, title* ao invés de *m.title*. A virgula faz o MySQL procurar o *m* como se ele fosse uma coluna, por isso o erro. Para consertar só trocar a *,* por *.*.
´´´

´´´sh
d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)

SELECT 
	Movies.id, Movies.name,
	Actor.id, Actor.name,
	Rating.rate, Rating.comment
FROM Movies 
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
LEFT JOIN Actor ON  MovieCast.actor_id = Actor.id
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
´´´
