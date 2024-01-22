import { conectaAPI } from "./conectaAPI";

async function buscarVideo (event) {
    event.preventDefault();
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.buscaVideo()
    console.log(busca)
}

const botaoPesquisa = document.querySelector(".pesquisar__botao")
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento))