// Dados do jogo (simulando o carregamento do JSON)
// Em um projeto real, você carregaria isso de um arquivo JSON usando fetch()
const cartas = [
   
  {
    "id": 1,
    "categoria": "formação",
    "dificuldade": "fácil",
    "pergunta": "O solo laterítico corresponde à camada mais profunda do perfil do solo tropical que resulta da decomposição ou desagregação in situ da rocha mantendo ainda, de maneira nítida, a estrutura da rocha que lhe deu origem.",
    "opcoes": {
    "verdadeiro": "Verdadeiro",
    "falso": "Falso"
    },
    "respostaCorreta": "Falso",
    "avanco": 1,
    "tipo": "VF"
  },
 {
    "id": 2,
    "categoria": "formação",
    "dificuldade": "fácil",
    "pergunta": "O solo saprolítico caracterizase por ser um solo superficial, típicos de áreas bem drenadas das regiões tropicais úmidas; residual ou não, intemperizado em condições tropicais, rico em óxidos e hidróxidos de ferro e alumínio..",
    "opcoes": {
     "verdadeiro": "Verdadeiro",
     "falso": "Falso"
    },
    "respostaCorreta": "Falso",
    "avanco": 1,
    "tipo": "VF"
     },
  {
    "id": 3,
    "categoria": "formação",
    "dificuldade": "fácil"
    "pergunta": "Qual dos seguintes fenômenos não representa um tipo de intemperismo?",
    "opcoes": {
     "a": "Magmático",
     "b": "Físico",
     "c": "Químico",
     "d": "Biológico"
    },
    "respostaCorreta": "a",
    "avanco": 1,
    "tipo": "multipla_escolha"
  },
  {
    "id": 4,
    "categoria": "formação",
    "dificuldade": "fácil",
    "pergunta": "Qual é o principal fator que afeta a formação dos solos tropicais?",
    "opcoes": {
     "a": "Altitude",
     "b": "Latitude",
     "c": "Glaciação",
     "d": "Precipitação alta"
    },
    "respostaCorreta": "d",
    "avanco": 1,
    "tipo": "multipla_escolha"   
  },
  {
    "id": 5,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Como a atividade biológica afeta os solos tropicais?",
    "opcoes": {
     "a": "Aumenta a compactação",
     "b": "Reduz a biodiversidade do solo",
     "c": "Aumenta a porosidade do solo",
     "d": "Desagregação das partículas do solo"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 6,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Qual dos seguintes fatores contribui significativamente para a lixiviação de minerais em solos tropicais?",
    "opcoes": {
     "a": "Altas temperaturas",
     "b": "Elevada precipitação pluviométrica",
     "c": "Presença de argilominerais estáveis",
     "d": "Insolubilidade de carbonatos e da gipsita"
    },
    "respostaCorreta": "b",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 7,
    "categoria": "formação",
    "dificuldade": "difícil",
    "pergunta": "Qual das seguintes características dos solos lateríticos é devida à lixiviação?",
    "opcoes": {
     "a": "Elevada fertilidade",
     "b": "Elevada acidez",
     "c": "Presença de horizontes bem definidos",
     "d": "Baixa porosidade"
    },
    "respostaCorreta": "b",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 8,
    "categoria": "formação",
    "dificuldade": "médio",
    "texto": "Qual reação de intemperismo químico pode ocorrer em ambientes em que as águas percolantes possuem pH inferior a 5?",
    "opcoes": {
     "a": "Hidrólise",
     "b": "Acidólise",
     "c": "Hidratação",
     "d": "Dissolução"
    },
    "respostaCorreta": "b",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 9,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Os solos que possuem elevados teores de óxidos e hidróxidos de ferro e alumínio em sua composição são classificados como:",
    "opcoes": {
     "a": "Solo siltoso",
     "b": "Solo saprolítico",
     "c": "Solo laterítico",
     "d": "Solo arenoso"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 10,
    "categoria": "formação",
    "dificuldade": "difícil",
    "pergunta": "Qual é o argilomineral mais comumente encontrado nos solos lateríticos?",
    "opcoes": {
     "a": "Montmorilonita",
     "b": "Caolinita",
     "c": "Haloisita",
     "d": "Ilita"
    },
    "respostaCorreta": "b",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 11,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Qual é o mineral primário mais comum encontrado nos solos tropicais?",
    "opcoes": {
     "a": "Quartzo",
     "b": "Anfibólio",
     "c": "Olivina",
     "d": "Biotita"
    },
    "respostaCorreta": "a",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 12,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Qual é a influência dos óxidos e hidróxidos de ferro e alumínio na formação de agregações nos solos lateríticos?",
    "opcoes": {
     "a": "Reduzir adsorção de água",
     "b": "Provocam a desagregação dos solos",
     "c": "Reduzem a densidade dos solos",
     "d": "Cimentam as partículas"
    },
    "respostaCorreta": "d",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 13,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Quais são os principais óxidos e hidróxidos de ferro encontrados em solos tropicais?",
    "opcoes": {
     "a": "Andaluzita e Cianita",
     "b": "Magnetita e Pirita",
     "c": "Hematita e Goethita",
     "d": "Espinélio e Estaurolita"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 14,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Quais dos seguintes exemplos são argilominerais 2:1?",
    "opcoes": {
     "a": "Haloisita e Caulinita",
     "b": "Haloisita e Ilita",
     "c": "Caulinita e Vermiculita",
     "d": "Montmorilonita e Ilita"
    },
    "respostaCorreta": "d",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 15,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "O que caracteriza a caulinita, um dos principais argilominerais em solos lateríticos?",
    "opcoes": {
     "a": "Estrutura 2:1 e alta plasticidade",
     "b": "Estrutura 1:1 e baixa plasticidade",
     "c": "Estrutura 2:1 e baixa plasticidade",
     "d": "Estrutura 1:1 e alta plasticidade"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 16,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Quais são as principais estruturas cristalinas encontradas em argilominerais?",
    "opcoes": {
     "a": "Tetraédricas e octaédricas",
     "b": "Monoclínica e triclínica",
     "c": "Ortorrômbica e rômbica",
     "d": "Hexagonal e trigonal"
    },
    "respostaCorreta": "a",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 17,
    "categoria": "formação",
    "dificuldade": "difícil",
    "pergunta": "Quais das seguintes sequências representam os fenômenos de alteração intempérica em ordem crescente de hidrólise?",
    "opcoes": {
     "a": "Monossalitização, Bissalitização, Alitização",
     "b": "Bissalitização, Alitização, Monossalitização",
     "c": "Bissalitização, Monossalitização, Alitização",
     "d": "Alitização, Bissalitização, Monossalitização"
    },
    "respostaCorreta": "c",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 18,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Qual hidróxido de alumínio é formado na reação de intemperismo químico denominada de alitização?",
    "opcoes": {
     "a": "Caolinita",
     "b": "Esmectita",
     "c": "Gibsita",
     "d": "Montmorilonita"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 19,
    "categoria": "formação",
    "dificuldade": "fácil",
    "pergunta": "Intemperismo físico é caracterizado pela desagregação das rochas, alterando o tamanho e o formato dos seus minerais, mas sem afetar a composição química.",
    "opcoes": {
     "verdadeiro": "Verdadeiro",
     "falso": "Falso"
    },
    "respostaCorreta": "Verdadeiro",
    "avanco": 1,
    "tipo": "VF"
  },
  {
    "id": 20,
    "categoria": "formação",
    "dificuldade": "médio",
    "pergunta": "Solos podzólicos são formados como resultado da reação de intemperismo químico denominada de acidólise parcial.",
    "opcoes": {
     "verdadeiro": "Verdadeiro",
     "falso": "Falso"
    },
    "respostaCorreta": "Falso",
    "avanco": 2,
    "tipo": "VF"
  },
    {
    "id": 21,
    "categoria": "classificação",
    "dificuldade": "fácil",
    "pergunta": "Avalie os solos neste perfil típico de solo tropical baseando-se nos dois grandes grupos da classificação MCT.",
    "opcoes": {
     "a": "Camada superior: Laterítico; Camada inferior: Saprolítico.",
     "b": "Camada superior: Saprolítico; Camada inferior: Laterítico.",
     "c": "Camada superior: Saprolítico; Camada inferior: Saprolítico.",
     "d": "Camada superior: Orgânico; Camada inferior: Residual."
    },
    "respostaCorreta": "a",
    "avanco": 1,
    "tipo": "multipla_escolha",
    "imagemUrl": "imagem_carta_21.png"
  },
  {
    "id": 22,
    "categoria": "classificação",
    "dificuldade": "fácil",
    "pergunta": "Sistema de classificação utilizado para classificar um solo em laterítico ou não laterítico ",
    "opcoes": {
     "a": "SUCS",
     "b": "MCT",
     "c": "TRB",
     "d": "SPT"
    },
    "respostaCorreta": "b",
    "avanco": 1,
    "tipo": "multipla_escolha"
  },
  {
    "id": 23,
    "categoria": "classificação",
    "dificuldade": "fácil",
    "pergunta": "Qual característica do solo o ensaio de perda de massa por imersão pode indicar?",
    "opcoes": {
     "a": "Porosidade",
     "b": "Acidez natural",
     "c": "Grau de saturação",
     "d": "Erodibilidade"
    },
    "respostaCorreta": "d",
    "avanco": 1,
    "tipo": "multipla_escolha"
  },
  {
    "id": 24,
    "categoria": "classificação",
    "dificuldade": "fácil",
    "pergunta": "Quais critérios são usados na classificação expedita MCT?",
    "opcoes": {
     "a": "Contração volumétrica e penetração",
     "b": "Contração diametral e penetração",
     "c": "Contração diametral e perda de massa",
     "d": "Perda de massa e penetração"
    },
    "respostaCorreta": "b",
    "avanco": 1,
    "tipo": "multipla_escolha"
  },
  {
    "id": 25,
    "categoria": "classificação",
    "dificuldade": "fácil",
    "pergunta": "Qual ensaio, representado na figura abaixo, que consiste na determinação do máximo consumo de corante adsorvido pelo solo?",
    "opcoes": {
     "a": "Ensaio para identificação de matéria orgânica",
     "b": "Ensaio de Azul de Metileno",
     "c": "Ensaio para determinação do índice de atividade",
     "d": "Ensaio de pH do solo"
    },
    "respostaCorreta": "b",
    "avanco": 1,
    "tipo": "multipla_escolha",
    "imagemUrl": "imagem_carta_25.png"
  },
  {
    "id": 26,
    "categoria": "classificação",
    "dificuldade": "difícil",
    "pergunta": "Na metodologia MCT, a inclinação d' do ramo seco na curva de compactação indica qual propriedade do solo?",
    "opcoes": {
     "a": "Tendência ao comportamento laterítico",
     "b": "Baixa deformalidade",
     "c": "Presença de areia quartzosa",
     "d": "Granulometria fina"
    },
    "respostaCorreta": "c",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 27,
    "categoria": "classificação",
    "dificuldade": "médio",
    "pergunta": "Na metodologia MCT, uma baixa perda de massa por imersão indica qual classificação do solo?",
    "opcoes": {
     "a": "Laterítico",
     "b": "Não laterítico",
     "c": "Siltoso",
     "d": "Arenoso"
    },
    "respostaCorreta": "a",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": 28,
    "categoria": "classificação",
    "dificuldade": "médio",
    "pergunta": "O que se pode afirmar a respeito da distância intercalar de um argilomineral?",
    "opcoes": {
     "a": "É a menor unidade que representa a estrutura cristalina",
     "b": "Não varia com a presença de íons ou água",
     "c": "Só é mensurável em argilominerais 1:1",
     "d": "É importante para a classificação dos argilominerais"
    },
    "respostaCorreta": "d",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": "29",
    "categoria": "classificação",
    "dificuldade": "médio",
    "pergunta": "Qual das seguintes características a Microscopia Eletrônica de Varredura pode fornecer para auxiliar na classificação de argilominerais?",
    "opcoes": {
     "a": "Calor específico",
     "b": "Bandas de absorção de infravermelho",
     "c": "Superfície e poros dos minerais",
     "d": "Número de coordenação"
    },
    "respostaCorreta": "c",
    "avanco": 2,
    "tipo": "multipla_escolha"
  },
  {
    "id": "30",
    "categoria": "classificação",
    "dificuldade": "difícil",
    "pergunta": "Qual das seguintes características dos argilominerais não é fornecida pela Difração de Raios X (DRX)?",
    "opcoes": {
     "a": "Expansão e contração entre camadas",
     "b": "Composição mineralógica",
     "c": "Estrutura Cristalina",
     "d": "Polaridade das partículas magnéticas"
    },
    "respostaCorreta": "d",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 31,
    "categoria": "interpretação",
    "dificuldade": "difícil",
    "pergunta": "A figura a seguir apresenta qual fenômeno e como ele se caracteriza?",
    "opcoes": {
     "a": "Fenômeno: Expansão. Característica: Aumento de volume de alguns argilominerais devido à adsorção de água em sua estrutura interlamelar.",
     "b": "Fenômeno: Contração. Característica: Redução de volume de alguns argilominerais pela perda de água de sua estrutura.",
     "c": "Fenômeno: Adsorção. Característica: Retenção de partículas de ar na superfície dos argilominerais.",
     "d": "Fenômeno: Erosão. Característica: Deslocamento de partículas de solo pela ação da água."
    },
    "respostaCorreta": "a",
    "avanco": 3,
    "tipo": "multipla_escolha",
    "imagemUrl": "imagem_carta_31.png"
  },
  {
    "id": 32,
    "categoria": "interpretação",
    "dificuldade": "difícil",
    "pergunta": "Quais características do fluído de umedecimento podem favorecer a ocorrência de colapso?",
    "opcoes": {
     "a": "Presença de sódio e baixa tensão superficial",
     "b": "Ausência de sódio e alta tensão superficial",
     "c": "Presença de sódio e alta tensão superficial",
     "d": "Ausência de sódio e baixa tensão superficial"
    },
    "respostaCorreta": "c",
    "avanco": 3,
    "tipo": "multipla_escolha"
  },
  {
    "id": 33,
    "categoria": "interpretação",
    "dificuldade": "fácil",
    "pergunta": "O solo laterítico ao ser compactado apresenta boa resistência e baixa deformabilidade.",
    "opcoes": {
     "verdadeiro": "Verdadeiro",
     "falso": "Falso"
    },
    "respostaCorreta": "Falso",
    "avanco": 1,
    "tipo": "VF"
  },
  {
    "id": 34,
    "categoria": "interpretação",
    "dificuldade": "fácil",
    "pergunta": "Qual sistema de disposição final de resíduos sólidos possui como função resistir à erosão, ressecamento e retenção de água?",
    "opcoes": {
     "a": "Camada de cobertura",
     "b": "Revestimento de fundo",
     "c": "Barreira hidráulica",
     "d": "Camada de drenagem"
    },
    "respostaCorreta": "a",
    "avanco": 1,
    "tipo": "multipla_escolha"
  },
  {
    "id": 35,
    "categoria": "interpretação",
    "dificuldade": "difícil",
    "texto": "Como é denominado a máxima quantidade de água que o solo pode reter em equilíbrio com as forças de gravidade?",
    "opcoes": {
     "a": "Capacidade de sucção",
     "b": "Ponto de murcha permanente",
     "c": "Capacidade de suporte",
     "d": "Capacidade de campo"
    },
    "respostaCorreta": "d",
    "avanco": 3,
    "tipo": "multipla_escolha"
  }

    // ... adicione todas as suas cartas aqui
];

// Mapeamento das posições no tabuleiro (ajuste as coordenadas X, Y para o seu tabuleiro)
// Estas são apenas POSIÇÕES DE EXEMPLO. Você precisará mapear as posições exatas no seu tabuleiro.
const boardPositions = {
    "INÍCIO": { x: 63, y: 106 }, // Exemplo: canto inferior esquerdo
    "1": { x: 69, y: 152 },
    "2": { x: 120, y: 167 },
    "3": { x: 171, y: 179 },
    "4": { x: 217, y: 169 },
    "5": { x: 259, y: 136 },
    "6": { x: 304, y: 110 },
    "7": { x: 340, y: 76 },
    "8": { x: 384, y: 49 },
    "9": { x: 439, y: 47 },
    "10": { x: 487, y: 47 },
    "11": { x: 531, y: 67 },
    "12": { x: 582, y: 82 },
    "13": { x: 621, y: 110 },
    "14": { x: 649, y: 155 },
    "15": { x: 673, y: 194 },
    "16": { x: 670, y: 242 },
    "17": { x: 633, y: 281 },
    "18": { x: 603, y: 289 },
    "19": { x: 541, y: 275 },
    "20": { x: 501, y: 257 }, // Exemplo: canto superior direito
    "21": { x: 459, y: 227 },
    "22": { x: 412, y: 214 },
    "23": { x: 361, y: 200 },
    "24": { x: 310, y: 217 },
    "25": { x: 277, y: 251 },
    "26": { x: 294, y: 299 },
    "27": { x: 334, y: 322 },
    "28": { x: 376, y: 347 },
    "29": { x: 421, y: 377 },
    "30": { x: 465, y: 397 },
    "31": { x: 510, y: 409 },
    "32": { x: 558, y: 401 },
    "33": { x: 604, y: 403 },
    "34": { x: 654, y: 394 },
    "35": { x: 678, y: 358 },
    "FIM": { x: 690, y: 305 } // Exemplo: Posição final
};


// Elementos do DOM
const drawCardBtn = document.getElementById('draw-card-btn');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const questionArea = document.getElementById('question-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerInput = document.getElementById('answer-input');
const feedbackMessage = document.getElementById('feedback-message');
const currentTurnDisplay = document.getElementById('current-turn');

// Estado do jogo
let players = [
    { id: 1, name: 'Grupo 1', position: "INÍCIO", marker: document.getElementById('player1-marker') },
    { id: 2, name: 'Grupo 2', position: "INÍCIO", marker: document.getElementById('player2-marker') }
    // Adicione mais grupos aqui
];
let currentPlayerIndex = 0;
let currentCard = null;
let usedCards = [];

// Função para inicializar o jogo
function initializeGame() {
    players.forEach(player => {
        player.position = "INÍCIO";
        updatePlayerMarker(player);
    });
    currentPlayerIndex = 0;
    updateTurnDisplay();
    questionArea.style.display = 'none';
    drawCardBtn.style.display = 'block';
    feedbackMessage.textContent = '';
    usedCards = []; // Resetar cartas usadas para um novo jogo
}

// Função para atualizar a posição visual do marcador do jogador
function updatePlayerMarker(player) {
    const pos = boardPositions[player.position];
    if (pos) {
        // Ajuste para centralizar o marcador na posição
        player.marker.style.left = `${pos.x - player.marker.offsetWidth / 2}px`;
        player.marker.style.top = `${pos.y - player.marker.offsetHeight / 2}px`;
    }
}

// Função para atualizar o display do turno
function updateTurnDisplay() {
    currentTurnDisplay.textContent = `Turno do ${players[currentPlayerIndex].name}`;
}

// Função para sortear uma carta
function drawCard() {
    if (usedCards.length === cartas.length) {
        feedbackMessage.textContent = "Todas as cartas foram usadas! Reiniciando o baralho.";
        usedCards = []; // Opcional: reiniciar o baralho se todas as cartas foram usadas
    }

    let availableCards = cartas.filter(card => !usedCards.includes(card.id));
    if (availableCards.length === 0) {
        feedbackMessage.textContent = "Não há mais cartas disponíveis. O jogo terminou ou reinicie.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    currentCard = availableCards[randomIndex];
    usedCards.push(currentCard.id);

    displayQuestion(currentCard);
    drawCardBtn.style.display = 'none';
    questionArea.style.display = 'block';
    feedbackMessage.textContent = '';
}

// Função para exibir a pergunta na tela
function displayQuestion(card) {
    questionText.textContent = card.pergunta;
    optionsContainer.innerHTML = ''; // Limpa opções anteriores
    answerInput.style.display = 'none';
    submitAnswerBtn.style.display = 'block';

    if (card.tipo === 'multipla_escolha' || card.tipo === 'verdadeiro_falso') {
        for (const key in card.opcoes) {
            const optionBtn = document.createElement('button');
            optionBtn.classList.add('option-btn');
            optionBtn.textContent = `${key.toUpperCase()}) ${card.opcoes[key]}`;
            optionBtn.dataset.value = key; // Armazena a chave da opção
            optionBtn.addEventListener('click', () => selectOption(key));
            optionsContainer.appendChild(optionBtn);
        }
    } else {
        // Para perguntas de resposta aberta, se você decidir implementá-las
        answerInput.style.display = 'block';
        answerInput.value = '';
    }
}

// Função para selecionar uma opção (para múltipla escolha/verdadeiro-falso)
function selectOption(selectedAnswer) {
    checkAnswer(selectedAnswer);
}

// Função para verificar a resposta
function checkAnswer(playerAnswer) {
    const currentPlayer = players[currentPlayerIndex];
    let isCorrect = false;

    if (currentCard.tipo === 'multipla_escolha' || currentCard.tipo === 'verdadeiro_falso') {
        isCorrect = (playerAnswer.toLowerCase() === currentCard.respostaCorreta.toLowerCase());
    } else {
        // Para respostas abertas, a comparação precisa ser exata ou usar lógica mais complexa
        // Por simplicidade, aqui comparamos exatamente.
        isCorrect = (playerAnswer.trim().toLowerCase() === currentCard.respostaCorreta.trim().toLowerCase());
    }

    if (isCorrect) {
        feedbackMessage.style.color = 'green';
        feedbackMessage.textContent = 'Resposta Correta! Avance!';
        movePlayer(currentPlayer, currentCard.avanco);
    } else {
        feedbackMessage.style.color = 'red';
        feedbackMessage.textContent = 'Resposta Incorreta. Permaneça na casa.';
    }

    // Desabilitar botões de resposta e mostrar botão de sortear para o próximo turno
    optionsContainer.innerHTML = ''; // Remove as opções
    answerInput.style.display = 'none';
    submitAnswerBtn.style.display = 'none';
    drawCardBtn.style.display = 'block'; // Permite sortear a próxima carta
    drawCardBtn.textContent = 'Próximo Turno'; // Muda o texto para indicar próximo turno

    // Passa o turno após um pequeno atraso para o feedback ser lido
    setTimeout(nextTurn, 2000);
}

// Função para mover o jogador
function movePlayer(player, steps) {
    const currentPosIndex = Object.keys(boardPositions).indexOf(player.position);
    let newPosIndex = currentPosIndex + steps;

    // Garante que o jogador não passe do FIM
    const finalPosIndex = Object.keys(boardPositions).indexOf("FIM");
    if (newPosIndex >= finalPosIndex) {
        newPosIndex = finalPosIndex;
        player.position = "FIM";
        feedbackMessage.textContent += ` ${player.name} chegou ao FIM!`;
        setTimeout(() => {
            alert(`${player.name} Venceu o jogo!`);
            initializeGame(); // Reinicia o jogo
        }, 1000);
    } else {
        player.position = Object.keys(boardPositions)[newPosIndex];
    }
    updatePlayerMarker(player);
}

// Função para passar o turno
function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnDisplay();
    questionArea.style.display = 'none'; // Esconde a pergunta
    drawCardBtn.textContent = 'Sortear Carta'; // Volta o texto do botão
    feedbackMessage.textContent = ''; // Limpa feedback
}

// Event Listeners
drawCardBtn.addEventListener('click', drawCard);
submitAnswerBtn.addEventListener('click', () => {
    // Para perguntas de resposta aberta
    if (answerInput.style.display === 'block') {
        checkAnswer(answerInput.value);
    }
});

// Inicializa o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', initializeGame);