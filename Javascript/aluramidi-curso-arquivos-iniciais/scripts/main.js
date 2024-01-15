function tocaSom(som) {
    return document.querySelector(`#${som}`).play()
}

const listaBotoes = document.querySelectorAll(".tecla")
const listaSons = document.querySelectorAll(".som")

listaBotoes.forEach((botao,indice) => {
    botao.onclick = ()=>{
        tocaSom(listaSons[indice].id)
    }

    botao.onkeydown = (event) => {
        console.log(event)
        if (event.code == "Enter" || event.code == "Space") {
            botao.classList.add("ativa")
        }
    }
 
    botao.onkeyup = () => {
        botao.classList.remove("ativa")
    }
})



// listaSons.forEach( (som) => {
//     tocaSomPom(som.id)
// })
