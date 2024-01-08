//Reduce serve para somar os elementos de um array

const numeros = [7, 4.5, 8, 7.5]

// const soma = numeros.reduce((acc,num)=>{
//     return acc+num
// },0)

const soma = numeros.reduce((acc,num) => acc+num, 0)
console.log(soma)