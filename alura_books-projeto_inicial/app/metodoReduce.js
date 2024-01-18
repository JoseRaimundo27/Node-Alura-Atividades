function calcularValorTotal(livros) {
    const valorTotal = livros.reduce ( (acc, livro) => acc + livro.preco).toFixed(2)
    return valorTotal
}