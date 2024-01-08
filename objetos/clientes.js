//Encontrar um objeto na lista de objetos:
const clientes = require("./clientes.json")

// function encontrar(clientes, chave, valor){
//     return clientes.find( (item) => item[chave].includes(valor)) //Includes resolve problema de arrays
// }

// const encontrado = encontrar(clientes,"telefone", "4775323087")
// console.log(encontrado.endereco.complemento)

//Encontrar quem tem apartamento true e não tem complemento:
// function filtrar(clientes){
//     return clientes.filter(item => item.endereco["apartamento"] == true && item.endereco["complemento"] === undefined)
// }

// const apartamentos = filtrar(clientes)
// console.log(apartamentos)

//Ordenando lista de objetos:
function ordena(clientes,parametro){
    const resultado = clientes.sort((a,b)=>{
        if(a[parametro] > b[parametro]){
            return 1
        }
        if(a[parametro] < b[parametro]){
            return -1
        }
        else{
            return 0
        }
    })
    return resultado
}
console.log(ordena(clientes,"nome"))