const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

for(chave in objPersonagem){
    console.log(chave)
}
console.log("-------------------------")

for(chave in objPersonagem){
    console.log(objPersonagem[chave])
}