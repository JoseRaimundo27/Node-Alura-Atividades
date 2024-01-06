const pessoa = {
    nome: "joao",
    idade: 40,
    telefones: ["719213671","71912389"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor
            console.log(`Pagamento realizado, novo saldo ${this.saldo}`)
        }
    }

}
const carro =[{
    nome: "onix",
    marca: "chevrolet",
    dono: pessoa
}, {
    nome: "toro",
    marca: "Fiat"
}
]
console.log(carro[1].nome)
pessoa.efetuaPagamento(120)
console.log(pessoa)