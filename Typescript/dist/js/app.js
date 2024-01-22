import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
console.log("aqui");
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});
