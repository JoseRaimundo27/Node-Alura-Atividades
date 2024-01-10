import chalk from "chalk"

function extraiLinks(arrLinks) {
    const links = arrLinks.map((objLink) => {
        return Object.values(objLink).join()
    })
    return links
}

async function checaStatus(links) {
    const arrStatus = await Promise.all(
        links.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status
            } catch (erro) {
                return manejaErros(erro)
            }

        })
    )
    return arrStatus

}
function manejaErros(erro) {
    if(erro.cause.code === "ENOTFOUND"){
        return "Link não encontrado"
    }else{
        return "Ocorreu algum erro"
    }
}
export default async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks)
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

