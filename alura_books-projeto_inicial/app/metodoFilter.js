const btn = document.querySelectorAll(".btn")

btn.forEach( botao => {
    botao.addEventListener("click", ()=>{
        filtrarLivros(botao)
    } )
})


function filtrarLivros (botao) {
    let livrosFiltrados = botao.value == "disponivel" ? filtrarDisponibilidade() : filtrarCategoria(botao)
    exibirLivros(livrosFiltrados)
    if (botao.value == "disponivel") {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirDisponiveis()
    }
}

function filtrarCategoria(botao) {
    return livros.filter(livro => livro.categoria == botao.value)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirDisponiveis( ) {
    elementoLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}