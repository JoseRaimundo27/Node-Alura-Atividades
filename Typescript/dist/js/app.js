import { Negociacao } from "./models/negociacao.js";
const negocio = new Negociacao(new Date(), 13, 12);
console.log(negocio.volume);
