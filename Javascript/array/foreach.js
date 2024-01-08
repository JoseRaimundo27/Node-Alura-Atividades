const numeros = [100,200,300,400,500,600,700]

// numeros.forEach( (element,indice)=>{
//     console.log(element,indice)
// })

function imprimeNumero(numero){
    console.log(numero)
}

numeros.forEach(imprimeNumero) //Apenas a referência da função! Eu não vou executar a função
//Função de callback