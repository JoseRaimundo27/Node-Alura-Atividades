import Conta from "../types/Conta.js"
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda , formatarData} from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato : HTMLElement = document.querySelector(".extrato .registro-transacoes")

function renderizarExtrato () : void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let hmtlRegistroTransacoes : string = "";

    for (let grupo of gruposTransacoes) {
        let hmtlTransacaoItem : string = ""
        for ( let transacao of grupo.transacoes){
            hmtlTransacaoItem += `
            <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                 </div>
            `
        }

        hmtlRegistroTransacoes += `
        <div class="transacao-group">
            <strong class="mes-group>${grupo.label}</strong>
            ${hmtlTransacaoItem}
        </div>
        `
    }

    if (hmtlRegistroTransacoes =="") {
        hmtlRegistroTransacoes = "<div>Não há transações registradas</div>"
    }
    elementoRegistroTransacoesExtrato.innerHTML = hmtlRegistroTransacoes;
}

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato()
    }
}

export default ExtratoComponent;