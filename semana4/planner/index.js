function adicionarTarefa() {
    const meuInput = document.getElementById("tarefa").value
    const diaDaSemana = document.getElementById("dias-semana").value
    const diaEscolhido = document.getElementById(diaDaSemana)   

    if(meuInput === ""){
        alert("Insira uma tarefa!")
    }
    
    diaEscolhido.innerHTML += `<p>${meuInput}</p>` 
    meuInput = "" 

}


