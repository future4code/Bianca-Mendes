### Exercício 01 

a) Os comandos utilizados nessa tabela foram:

* **VARCHAR** : declaração de string, logo em seguida recebe () com a quantidade de caracteres
* **PRIMARY KEY** : identificador único da tabela
* **FLOAT** : declaração de números não inteiros
* **DATE** : declaração de data
* **NOT NULL** : declara que esse ítem não pode ser nulo

b) O comando **SHOW DATABASE** serve para visualizar o banco de dados criado e o que tem dentro dele.
Já o comando **SHOW TABLES** serve para visualizar as tabelas dentro do banco de dados

c) O comando **DESCRIBE Actor** serve para visualizar todas as colunas da tabela. Mostra o nome e tipo de cada coluna.


 
### Exercício 02 

a)
``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) Mensagem de erro:

>Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

O id é uma **PRIMARY KEY**, um identificador único e por esse motivo não pode ser utilizado novamente.

c) Mensagem de erro:

>Error Code: 1136. Column count doesn't match value count at row 1

O **VALUES** recebe mais ítens do que os declarados nos parâmetros do **INSERT INTO**

Código corrigido:
``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);
```

d) Mensagem de erro:

>Error Code: 1364. Field 'name' doesn't have a default value

O parâmetro **name** determinado na criação da tabela não tem um valor padrão pra caso esse campo não seja preenchido, por esse motivo não pode ser nulo (mesmo não sendo passado na linha INSERT INTO)

Código corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "Nome ator",
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Mensagem de erro:

>Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

A linha **birth_date** esta recebendo um valor incorreto

Código corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```



### Exercício 03

a) 
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary FROM Actor WHERE name= "Tony Ramos";
```

c) Mensagem:

>0 row(s) returned

Retorna **NULL**, pois não tem nenhum valor para ser mostrado

d)
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

e) Mensagem de erro:

>Error Code: 1054. Unknown column 'nome' in 'field list'

A coluna **nome** não existe na lista de campos (colunas) da tabela

Código corrigido:
```
SELECT id, name from Actor WHERE id = "002";
```



### Exercício 04

a) 
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

A query acima pede para retornar todos os atores/atrizes que tenham nomes que se iniciam com a letra A ou J e que tenham salário maior que R$300.000. É necessário o uso de parenteses para primeiro ler e puxar os dados referentes ao que esta dentro do parenteses e posterioemente usar esse dado para resolver a segunda condição (AND). Obs. O % após a letra sinaliza que é pra buscar palavras que se iniciam a letra determinada.

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR "%G%";
```

d)
```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR "%a%" OR "%g%" OR "%G%" ) AND salary BETWEEN  350000 AND 900000;
```
O *name LIKE* fica dentro dos parenteses pq tbm faz parte da condição



### Exercício 05

a) A query esta criando uma tabela, com determinados parametros. Os parametros utilizam os comandos *VARCHAR, PRIMARY KEY, TEXT, DATE, INT E NOT NULL*.
```
CREATE TABLE Movies(
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b) 
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
```

c)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
```

d)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);
```

e)

