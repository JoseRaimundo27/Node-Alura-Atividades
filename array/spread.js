const numeros = [7, 4.5, 8, 7.5]

const novosNumeros = [...numeros]
//Para não ser uma cópia, eu realizo uma extensão com SPREAD 
novosNumeros.push(20)
console.log(novosNumeros)
console.log(numeros)
