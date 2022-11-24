/* 
    OBJETIVO - quando clicarmos na aba temos que mostrar o
    conteudo da aba que foi clicada pelo usuario e esconder
    conteudo da aba anterior.

*/

const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionada")){
            return;
        }

        SelecionarAba(aba)
        mostrarInformacoesDaAba(aba)
        
    });
});

function SelecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionada");
        abaSelecionada.classList.remove("selecionada")
        aba.classList.add("selecionada")
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
        informacaoSelecionada.classList.remove("selecionada");

        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionada")
}