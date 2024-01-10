import pegaArquivo from "./index.js";
import fs from "fs"
import chalk from "chalk"
import listaValidada from "./http-validacao.js";

const path = process.argv;

async function imprimeLista(valida,nomeDoArquivo="",resultado){
    if(valida){
        console.log(chalk.yellow("Lista validada:"), 
        chalk.black.bgGreen(nomeDoArquivo),
        await listaValidada(resultado))
    }else{
        console.log(chalk.yellow("Lista de links:"), 
        chalk.black.bgGreen(nomeDoArquivo),
        resultado)
    }
}
function trataErro(path){
    try{
        fs.lstatSync(path)
    }
    catch(erro){
        if(erro.code === "ENOENT"){
            console.log("Arquivo ou diretório não existe")
            return;
        }
    }
}
async function processaTexto(argumentos){
    const path = argumentos[2]
    const valida = argumentos[3] === "--valida"
    console.log(valida)
    trataErro(path)
    if(fs.lstatSync(path).isFile()){
        const resultado = await pegaArquivo(argumentos[2])
        imprimeLista(valida,path,resultado)

    }else if(fs.lstatSync(path).isDirectory()){
        const arquivos = await fs.promises.readdir(path)
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${path}/${nomeDoArquivo}`)
            imprimeLista(valida,nomeDoArquivo,lista)
        })
    }

}
processaTexto(path)

