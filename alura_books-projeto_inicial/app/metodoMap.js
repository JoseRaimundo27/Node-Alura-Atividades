function aplicarDesconto(livros) {
    const desconto = 0.3
    let multiplicador = 1 - desconto
    let livrosComDesconto = livros.map( (livro) => {
        return {...livro, preco: livro.preco*multiplicador}
    })
    return livrosComDesconto
}