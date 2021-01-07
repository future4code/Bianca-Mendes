//-------------------- EXERCICIO 2 --------------------

function obterEstatisticas(numeros: number[]): number {

    const numerosOrdenados: number = numeros.sort(
        (a: number, b: number) => a - b //se não passar essa linha, ele ordena por ordem alfabetica, ex. 1, 10, 2, 23....ao inves da ordem crescente
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}