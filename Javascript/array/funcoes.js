/* function comParametro(param) {
    console.log(param)
}
comParametro() */

const soma = function(n1,n2){
    return n1+n2
}
console.log(soma(1,2))

const somaNumerosPequenos = (num1,num2) =>{
    num1 >10 || num2 > 10 ? console.log("somente numeros de 1 a 9") :  console.log(num1+num2)
}
somaNumerosPequenos(1,4)