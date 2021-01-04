// ---------------EXERCÍCIO 02---------------
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

    const arithmeticOperators = process.argv[2]
    const firstValue = process.argv[3]
    const secondValue = process.argv[4]
    let result
    
    switch(arithmeticOperators) {
        case "add":
            result = Number(firstValue) + Number(secondValue)
            break
        case "sub":
            result = Number(firstValue) - Number(secondValue)
            break
        case "mult":
            result = Number(firstValue) * Number(secondValue)
            break
        case "div":
            result = Number(firstValue) / Number(secondValue)
    }

    console.log(`Resultado: ${result}`)


