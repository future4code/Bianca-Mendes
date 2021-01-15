# KNEX | Aula 46

### Exercício 1
* Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável connection para fazer queries no banco. 
```sh
a. Explique como é a resposta que temos quando usamos o raw; 
"Resposta: Ele retorna o primeiro índice do array, onde estão as infos relacionadas ao id."
```

```sh
b. Faça uma função que busque um ator pelo nome;
"Resposta:"
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor 
     WHERE name = '${name}'
   `)
    console.log(result[0][0])
    return result[0][0]
 }

 getActorByName("Camila Pitanga");
```

```sh
c. Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.;
"Resposta: "
const getActorGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count 
      FROM Actor
      WHERE gender = "${gender}"
   `)
   console.log(result[0][0])
   return result[0][0]
}
```

-------------------------------------------------------------------

### Exercício 2
* a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
```sh

```


