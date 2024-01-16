const elementoChute = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
    const fala = e.results[0][0].transcript
    exibeChuteNaTela(fala)
    verificaChute(fala)
 }

 function exibeChuteNaTela(fala) {
    elementoChute.innerHTML `
    <p class="mensagem__titulo">Você disse:</p>
    <span class="mensagem__box">${fala}</span>
    `
 }

 