const nomes = ["ana Julia", "Caio Vinicius", "Bia silva"]

const nomesMaiusculo = nomes.map( (nome) => nome.toUpperCase()) 
//Posso omitir as chaves no arrowFunction se apenas tenho uma linha com retorno
//Ele está retornando nome.toUpperCase()

console.log(nomesMaiusculo)