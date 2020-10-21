//criando um objeto

const formulario = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    conteudo: document.getElementById("conteudo-post"),
    imagem: document.getElementById("link-foto")
}


//função pra puxar os objetos criados

function arrayDeObjetos() {
const arrayDeObjetos = []
arrayDeObjetos.push = [formulario]
//console.log(arrayDeObjetos)
}


//função pra puxar as informações do html para js para colocar no formulario

const adicionarPost = () => {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const container = document.getElementById("posts")
    const imagem = document.getElementById("link-foto")
    container.innerHTML += `<h1>${titulo.value}</h1>`
    container.innerHTML += `<h3>${autor.value}</h3>`
    container.innerHTML += `<p>${conteudo.value}</p>`
    container.innerHTML += `<img src="${imagem.value}"/>`
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
}


//função pra apertar o botão, e adicionar as informações da função do adicionarPost ao container

function apertarBotao(event) {
    console.log(event)
    adicionarPost()
}
