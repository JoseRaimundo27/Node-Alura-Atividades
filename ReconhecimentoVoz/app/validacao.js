function verificaChute(fala) {
    const numero =+ chute

    if (Number.isNaN(numero)){
        alert("Valor invalido")
    }

    if (verificaExtremos(numero)){
        alert(`Valor Inválido: o numero deve estar entre ${menor-valor} e ${maior-valor}`)
    }
}

function verificaExtremos(numero) {
    return numero > maiorValor || numero < menorValor
}