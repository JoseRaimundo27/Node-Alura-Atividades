const numeros = [100, 200, 300, 400, 500, 600, 700]

//Solução para somar 50 em cada eleemnto
//foreach:

// numeros.forEach((num, indice) => {
//     numeros[indice] = num + 50
// })

// console.log(numeros)

//Map:
const novoArray = numeros.map((num)=>{
     num+=50
     return num +=1
    
})

console.log(novoArray)

//Nem o map nem o forEach atualizam direto no array, é preciso salvar