const elementoInserirLivros = document.querySelector("#livros")
const elementoLivrosDisponiveis = document.querySelector("#valor_total_livros_disponiveis")
function exibirLivros(livros) {
    elementoInserirLivros.innerHTML = ""
    elementoLivrosDisponiveis.innerHTML = ""
    
    livros.forEach((livro) => {
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
        elementoInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    })
}

