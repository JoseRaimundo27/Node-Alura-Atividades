const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };

const chaves = ["nome", "idade", "cpf", "email", "emprego"];
console.log(cliente["nome"])

chaves.forEach( (chave)=>{
    console.log(`O valor da chave ${chave} é: ${cliente[chave]} `) //Acesso como um array
})
  