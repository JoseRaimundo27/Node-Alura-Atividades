const alunos = ["João", "José", "Henrique", "Maheus"]

function percorreLista(aluno){
    if(alunos.includes(aluno)){
        const indice = alunos.indexOf(aluno)
        console.log(`O ${aluno} está na lista no indice ${indice}`)
    }else{
        console.log(`O ${aluno} não está na lista`)
    }
    
}
percorreLista("José")
