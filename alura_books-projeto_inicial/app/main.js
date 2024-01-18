let livros = []
async function getBuscarLivrosAPI() {
    try {
        const res = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json")
        livros = await res.json()
        let livrosComDesconto = aplicarDesconto(livros)
        exibirLivros(livrosComDesconto)
    } catch (error) {
        console.log(`Houve um problema com a API: ${error}`)
    }
}



getBuscarLivrosAPI()