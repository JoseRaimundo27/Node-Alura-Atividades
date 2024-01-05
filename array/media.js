const notas = [{
    "nome":"paulo",
    "nota":10
},{"nome":"carlos","nota": 2},
{"nome":"ricardo", "nota": 5}]

let novoArray = [...notas];
novoArray.push({"nome":"ricardo", "nota": 5},{"nome":"ricardo", "nota": 5})

function adiciona(obj){
     
     return novoArray = [...novoArray,obj];
    }

const dados = [{"nome":"elias","nota":6},{"nome":"luan","nota": 5},{"nome":"oiioi","nota": 10}]

dados.forEach((objeto)=>{
    adiciona(objeto)
})

novoArray.forEach((objeto)=>{
    console.log(objeto.nota)
})

