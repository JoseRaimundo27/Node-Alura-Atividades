import chalk from "chalk"
import fs from "fs"
import listaValidada from "./http-validacao.js";

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(element => {
        return ({
            [element[1]]: element[2]
        })
    })
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
}

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, "Não há arquivo"))
}

//Promessas estão relacionadas a códigos assincronos:
//Async e Await:
//Async Await serve para escrevermos codigos assincronos assim como escrevemos codigo síncronos!
// Basicamente é igual usar o método then/catch/finally
async function pegaArquivo(path){
    try{
        const texto = await fs.promises.readFile(path,"utf-8")
        return extraiLinks(texto)
    }
    catch(erro){
        trataErro(erro)
    }
    finally{
        console.log(chalk.yellow('operação concluída'));        
    }
}


export default pegaArquivo;
