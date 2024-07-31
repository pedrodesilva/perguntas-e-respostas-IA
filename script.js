const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As produções dos filmes de hoje em dia buscam uma forma mais facil de criar um bom roteiro, buscando inteligencia artificial"  
        alternativas: [
            {
                texto: "isso criaria um vicio por opções mais facil, tirando a graça das produções de roteiro "
                afirmacao: "no inicio achei que iria estragar as obras feitas por humanos "
            },
            {
                texto: "seria uma forma de criar cenario diferente e fora da caixa"
                afirmacao: "seria legal e algo diferente "
            }
        ]
    },
    {
        enunciado: "como os roteiros foram feitos por uma IA apenas falta os dubladores e os personagens, mas vamos focar nos dubladores que tambem vai ser criada por uma IA",
        alternativas: [
            {
                texto: "vozes artificialmente me da medo",
                afirmacao: "É muito estranho achar normal as falas feitas por uma IA"
            },
            {
                texto: "imagina criar canarios tecnologicos que precisa usar a IA para criar as falas de robos"
                afirmacao: "seria legal um 'robo' interpretar outro robo"
            }
        ]
    },
    {
        enunciado: "Após o roteiro e dublagem agora imagine a dificuldade de desenhar os personagens e o cenario para criar um bom mangá, então novamente vamos usar IA para ajudar os mangaká  ",
        alternativas: [
            {
                texto: "desenhos feitos por uma IA é muito realista, não tem como achar bonito"
                afirmacao: "os traços são muito detalhados, não tem erros que fazem ser bom para os detalhes"
            },
            {
                texto: "os traços perfeitos ajudam um mangaká a ter ideias que melhoraria com a IA",
                afirmacao: "seria otimo uma junção dos melhores mangakás com inteligencia artificial"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
