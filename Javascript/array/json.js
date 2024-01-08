/* const userJson = {
    "nome": "josé",
    "idade": 30,
    "trabalho": "progamador"
}; //Objeto literal

// console.log(userJson) */

const jsonString = '[{"nome": "josé", "idade": 27}]';
let jsonObjeto = JSON.parse(jsonString)
console.log(jsonObjeto)
console.log(typeof jsonObjeto)

// let elementos = jsonObjeto.map((e)=>{
//     return console.log(e)
// })
jsonObjeto.forEach(element => {
    console.log(element.nome)
});
// let jsonObjeotoString = JSON.stringify(jsonObjeto)
// console.log(jsonObjeotoString)
// console.log(typeof jsonObjeotoString)