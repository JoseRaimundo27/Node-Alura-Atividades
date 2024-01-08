const dados = require("./cliente.json")
console.log(dados.email)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString)

const clienteEmObjeto = JSON.parse(clienteEmString)
console.log(clienteEmObjeto)