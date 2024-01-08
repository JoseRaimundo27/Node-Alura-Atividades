import chalk from "chalk"
import fs from "fs"


function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, "Não há arquivo"))
}
//Promessas estão relacionadas a códigos assincronos:
// Em funções assíncoranas, objetos promises são retornados! solucionamo-os com .then .catch . finally
// function pegaArquivo(path){
//     fs.promises
//     .readFile(path,"utf-8")
//     .then( (texto) => {
//         console.log(chalk.green(texto))
//     })
//     .catch( (error) => {
//         trataErro(error)
//     })
// }

//Async e Await:
//Async Await serve para escrevermos codigos assincronos assim como escrevemos codigo síncronos!
// Basicamente é igual usar o método then/catch/finally
async function pegaArquivo(path){
    try{
        const texto = await fs.promises.readFile(path,"utf-8")
        console.log(chalk.green(texto))
    }
    catch(erro){
        trataErro(erro)
    }
    finally{
        console.log(chalk.yellow('operação concluída'));        
    }
}
pegaArquivo("./arquivos/texto.md")
pegaArquivo("./arquivos/")
