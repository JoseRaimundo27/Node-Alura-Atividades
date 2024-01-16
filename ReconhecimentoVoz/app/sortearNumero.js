const menorValor = 1
const maiorValor = 1000
const numeroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio () { 
    return parseInt(Math.random()*maiorValor + 1)
}

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.textContent = menorValor
const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.textContent = maiorValor