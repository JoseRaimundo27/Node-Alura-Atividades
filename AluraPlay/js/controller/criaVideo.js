import { conectaAPI } from "../model/conectaAPI.js"

const formulario = document.querySelector("[data-formulario]");
console.log(formulario)

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaAPI.criaVideos(titulo, descricao, url, imagem);
    console.log("aqui")
    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento))