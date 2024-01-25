import { conectaAPI } from "../model/conectaAPI.js"
const formulario = document.querySelector("[data-formulario]")

async function criarVideo(event) {
    event.preventDefault(titulo,descricao,url,imagem)

    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() *10).toString()

    const resposta = await conectaAPI.criaVideos(titulo, descricao, url, imagem)
    

}

formulario.addEventListener("submit", event => criarVideo(event))