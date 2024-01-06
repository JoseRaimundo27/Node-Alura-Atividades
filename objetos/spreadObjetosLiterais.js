const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = {...objPersonagem} //Realizando spread para não serem o mesmo objeto
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) 
console.log(objPersonagem2.nome) 