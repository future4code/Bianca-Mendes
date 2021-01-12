### Exercício 01 

a) A query deletaria a coluna salario, e os valores que estavam lá seriam perdidos.

b) A query alteraria o nome da coluna *gender* para *sex* e teria como restrição receber palavras de até 06 caracteres (VARCHAR(6)).

c) A query alteraria apenas a restrição da tabela de *VARCHAR(6)* para *VARCHAR(255)*, manteria o mesmo nome

d)
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~



### Exercício 02

a)
~~~SQL
UPDATE Actor SET name=" F M", birth_date="1929-10-10" WHERE id="003";  
~~~ 

b)
~~~SQL
UPDATE Actor SET name= "JULIANA PÃES" WHERE id="005";

UPDATE Actor SET name= "Juliana Paes" WHERE id="005";
~~~

c)
~~~SQL
UPDATE Actor SET name= "Novo ator", salary= 140000, birth_date="1975-02-02", gender="female" WHERE id="005";
~~~

d) Mensagem recebida:
>0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Não voltou um erro, porém, nenhuma modificação aconteceu



### Exercício 03

a)
~~~SQL
DELETE FROM Actor WHERE name= "Fernanda Montenegro";
~~~

b)
~~~SQL
DELETE FROM Actor WHERE gender= "male" AND salary > 1000000;
~~~



### Exercício 04

a)
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

b)
~~~SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female"; 
~~~

c)
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender= "female";
~~~

d)
~~~SQL
SELECT SUM(salary) FROM Actor;
~~~



### Exercício 05

a) A query agrupa os resultados a partir da coluna que vem após o **GROUP BY**. Para isso lê todas as linhas da tabela a procura da coluna específicada, e separa os resultados, agrupando os iguais. O **COUNT** retorna a quantidade de ítens que cada grupo tem, e o **gender** retorna o conteúdo de cada grupo.

b)
~~~SQL
SELECT id, name FROM Actor ORDER BY name DESC;
~~~

c)
~~~SQL
SELECT * FROM Actor ORDER BY salary;
~~~

d)
~~~SQL
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~

e)
~~~SQL
SELECT AVG(salary), gender FROM Actor GROUP BY gender; 
~~~



### Exercício 06

a)
~~~SQL
ALTER TABLE Movies ADD playing_limit_date VARCHAR(255);
~~~

b)
~~~SQL
ALTER TABLE Movies CHANGE rating rating FLOAT;
~~~

c)
~~~SQL
UPDATE Movies SET playing_limit_date= "2021-02-02" WHERE id="001";

UPDATE Movies SET playing_limit_date= "2020-02-02" WHERE id="002";
~~~

d) Mensagem recebida:
>0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Não voltou um erro, porém, nenhuma modificação aconteceu



### Exercício 07

a)
~~~SQL
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
~~~

b)
~~~SQL
SELECT AVG(rating) FROM Movies;
~~~

c)
~~~SQL
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
~~~

d)
~~~SQL
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();
~~~

e)
~~~SQL
SELECT MAX(rating) FROM Movies;
~~~

f)
~~~SQL
SELECT MIN(rating) FROM Movies;
~~~



### Exercício 08

a)
~~~SQL
SELECT * FROM Movies ORDER BY name ASC;
~~~

b)
~~~SQL
SELECT * FROM Movies ORDER BY name DESC LIMIT 5;
~~~

c)
~~~SQL
SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
~~~
coloca o where com essa condição pra ele puxar os filmes com lançamentos menor que a data de hoje, pra não pegar filmes que ainda não foram lançados

d)
~~~SQL
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
~~~ 

