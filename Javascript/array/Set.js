const nomes = ["Ana", "Clara", "Maria", "Clara", "Clara"]
const outroArray = [...nomes]
outroArray.push("Daniela")
const nomeCerto = [...new Set(nomes)]
console.log(nomes)
// nomes.forEach( (nome, indice)=>{
//     for(let i=0; i<nomes.length;i++){
//         if(nomes[i] == nome && indice != i){
//             return console.log(nome)
//         }
//     }
// })

//REMOVENDO COM SET: