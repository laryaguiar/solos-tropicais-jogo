// Elementos do DOM para a tela de setup
const gameSetupDiv = document.getElementById('game-setup');
const numPlayersSelect = document.getElementById('num-players');
const startGameBtn = document.getElementById('start-game-btn');

// Elementos do DOM do jogo
const gameAreaDiv = document.getElementById('game-area');
const drawCardBtn = document.getElementById('draw-card-btn');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const questionArea = document.getElementById('question-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerInput = document.getElementById('answer-input');
const feedbackMessage = document.getElementById('feedback-message');
const currentTurnDisplay = document.getElementById('current-turn');

// Elemento para exibir a imagem da pergunta
const questionImage = document.getElementById('question-image');

// Elementos do DOM para a tela final do jogo
const endGameScreenDiv = document.getElementById('end-game-screen');
const winnerMessage = document.getElementById('winner-message');
const winnerImage = document.getElementById('winner-image'); // NOVO: Imagem do vencedor
const scoreSummaryList = document.getElementById('score-summary');
const restartGameBtn = document.getElementById('restart-game-btn');

// Objetos de áudio
const audioStartGame = new Audio('audio/start_game.mp3'); // Caminho para o som de início
const audioCorrect = new Audio('audio/correct_answer.mp3'); // Caminho para o som de acerto
const audioIncorrect = new Audio('audio/incorrect_answer.mp3'); // Caminho para o som de erro
const audioWinner = new Audio('audio/winner_sound.mp3'); // NOVO: Caminho para o som de vencedor


// Estado do jogo
let players = []; // Começa vazio, será populado pela seleção do usuário
let currentPlayerIndex = 0;
let currentCard = null;
let allCards = []; // Variável para armazenar todas as cartas carregadas do JSON
let usedCardsByCategory = {}; // Objeto para rastrear cartas usadas por categoria
let nextTurnTimeoutId = null; // Variável global para armazenar o ID do timeout do próximo turno


// Mapeamento das posições no tabuleiro (CORRIGIDO E COMPLETO com categorias)
// ATENÇÃO: "INÍCIO" agora é "0" e "FIM" agora é "36" para garantir a ordem correta das chaves.
const boardPositions = {
    "0": { x: 63, y: 106, category: "formação" }, // INÍCIO
    "1": { x: 69, y: 152, category: "formação" },
    "2": { x: 120, y: 167, category: "formação" },
    "3": { x: 171, y: 179, category: "formação" },
    "4": { x: 217, y: 169, category: "formação" },
    "5": { x: 259, y: 136, category: "formação" },
    "6": { x: 304, y: 110, category: "formação" },
    "7": { x: 340, y: 76, category: "formação" },
    "8": { x: 384, y: 49, category: "formação" },
    "9": { x: 439, y: 47, category: "formação" },
    "10": { x: 487, y: 47, category: "formação" },
    "11": { x: 531, y: 67, category: "formação" },
    "12": { x: 582, y: 82, category: "formação" },
    "13": { x: 621, y: 110, category: "formação" },
    "14": { x: 649, y: 155, category: "formação" },
    "15": { x: 673, y: 194, category: "formação" },
    "16": { x: 670, y: 242, category: "formação" },
    "17": { x: 633, y: 281, category: "formação" },
    "18": { x: 603, y: 289, category: "formação" },
    "19": { x: 541, y: 275, category: "formação" },
    "20": { x: 501, y: 257, category: "formação" },
    "21": { x: 459, y: 227, category: "classificação" },
    "22": { x: 412, y: 214, category: "classificação" },
    "23": { x: 361, y: 200, category: "classificação" },
    "24": { x: 310, y: 217, category: "classificação" },
    "25": { x: 277, y: 251, category: "classificação" },
    "26": { x: 294, y: 299, category: "classificação" },
    "27": { x: 334, y: 322, category: "classificação" },
    "28": { x: 376, y: 347, category: "classificação" },
    "29": { x: 421, y: 377, category: "classificação" },
    "30": { x: 465, y: 397, category: "classificação" },
    "31": { x: 510, y: 409, category: "interpretação" },
    "32": { x: 558, y: 401, category: "interpretação" },
    "33": { x: 604, y: 403, category: "interpretação" },
    "34": { x: 654, y: 394, category: "interpretação" },
    "35": { x: 678, y: 358, category: "interpretação" },
    "36": { x: 690, y: 305, category: "interpretação" } // FIM
};


// Função para carregar as cartas do arquivo JSON
async function loadCards() {
    try {
        const response = await fetch('cartas.json'); // Certifique-se de que 'cartas.json' está na mesma pasta
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allCards = await response.json();
        console.log('Cartas carregadas com sucesso:', allCards);

        // Inicializa usedCardsByCategory com um array vazio para cada categoria encontrada
        allCards.forEach(card => {
            if (!usedCardsByCategory[card.categoria]) {
                usedCardsByCategory[card.categoria] = [];
            }
        });
        console.log('Rastreamento de cartas usadas inicializado por categoria:', Object.keys(usedCardsByCategory));

    } catch (error) {
        console.error('Erro ao carregar as cartas:', error);
        feedbackMessage.textContent = 'Erro ao carregar as perguntas do jogo. Verifique o arquivo cartas.json.';
    }
}

// Função para inicializar o jogo (chamada após a seleção de jogadores)
function initializeGame() {
    // Esconde telas e mostra a área do jogo
    gameSetupDiv.style.display = 'none';
    endGameScreenDiv.style.display = 'none'; // Garante que a tela final esteja escondida
    gameAreaDiv.style.display = 'flex'; // Use 'flex' ou 'block' dependendo do seu layout principal

    players.forEach((player, index) => {
        player.position = "0"; // Jogadores começam na casa "0" (INÍCIO)
        player.marker.style.display = 'flex'; // Garante que o marcador esteja visível ANTES de posicionar
        updatePlayerMarker(player, index); // Passa o índice para a função de atualização
    });

    // Esconde os marcadores não utilizados
    for (let i = players.length; i < 6; i++) {
        const unusedMarker = document.getElementById(`player${i + 1}-marker`);
        if (unusedMarker) {
            unusedMarker.style.display = 'none';
        }
    }

    // Reseta as cartas usadas para todas as categorias no início de um novo jogo
    Object.keys(usedCardsByCategory).forEach(category => {
        usedCardsByCategory[category] = [];
    });
    console.log('Rastreamento de cartas usadas resetado para todas as categorias.');

    currentPlayerIndex = 0;
    updateTurnDisplay();
    questionArea.style.display = 'none';
    drawCardBtn.style.display = 'block';
    feedbackMessage.textContent = '';
}

// Função para atualizar a posição visual do marcador do jogador
function updatePlayerMarker(player, index = 0) {
    const pos = boardPositions[player.position];
    if (pos) {
        let offsetX = 0;
        let offsetY = 0;

        // Aplica um offset apenas para a posição "0" (INÍCIO) para espalhar os jogadores
        if (player.position === "0") {
            const spread = 25; // Distância em pixels para espalhar os marcadores (ajustado para mais espaço)
            const rowSize = 3; // Número de marcadores por linha para o spread inicial
            // Centraliza o grupo de marcadores na posição INÍCIO
            offsetX = (index % rowSize) * spread - (spread * (rowSize - 1) / 2);
            offsetY = Math.floor(index / rowSize) * spread - (spread * (Math.ceil(players.length / rowSize) - 1) / 2);
        }

        player.marker.style.left = `${pos.x - player.marker.offsetWidth / 2 + offsetX}px`;
        player.marker.style.top = `${pos.y - player.marker.offsetHeight / 2 + offsetY}px`;
    }
}

// Função para atualizar o display do turno
function updateTurnDisplay() {
    currentTurnDisplay.textContent = `Turno do ${players[currentPlayerIndex].name}`;
}

// Função para sortear uma carta (AGORA FILTRA E REEMBARALHA POR CATEGORIA)
function drawCard() {
    if (allCards.length === 0) {
        feedbackMessage.textContent = "As cartas ainda não foram carregadas ou há um erro.";
        return;
    }

    const currentPlayer = players[currentPlayerIndex];
    const currentPositionCategory = boardPositions[currentPlayer.position].category;

    console.log(`--- Sorteando Carta para ${currentPlayer.name} ---`);
    console.log(`Posição atual: ${currentPlayer.position}, Categoria da Casa: "${currentPositionCategory}"`);

    let availableCardsInCurrentCategory = allCards.filter(card =>
        card.categoria === currentPositionCategory && !usedCardsByCategory[currentPositionCategory].includes(card.id)
    );

    console.log(`Cartas disponíveis para a categoria "${currentPositionCategory}" (não usadas): ${availableCardsInCurrentCategory.length}`);

    // Se todas as cartas da categoria atual foram usadas, reembaralha APENAS esta categoria
    if (availableCardsInCurrentCategory.length === 0) {
        console.log(`Todas as cartas da categoria "${currentPositionCategory}" foram usadas. Reembaralhando APENAS esta categoria.`);
        usedCardsByCategory[currentPositionCategory] = []; // Reembaralha apenas esta categoria
        availableCardsInCurrentCategory = allCards.filter(card =>
            card.categoria === currentPositionCategory && !usedCardsByCategory[currentPositionCategory].includes(card.id)
        );
        if (availableCardsInCurrentCategory.length === 0) {
            // Este caso só deve acontecer se não houver cartas para esta categoria no JSON
            feedbackMessage.textContent = `Não há cartas para a categoria "${currentPositionCategory}" mesmo após reembaralhar.`;
            console.error(`Nenhuma carta encontrada para a categoria "${currentPositionCategory}" mesmo após reembaralhar.`);
            return; // Não pode sortear uma carta
        }
    }

    const randomIndex = Math.floor(Math.random() * availableCardsInCurrentCategory.length);
    currentCard = availableCardsInCurrentCategory[randomIndex];
    usedCardsByCategory[currentPositionCategory].push(currentCard.id); // Rastreia a carta usada para sua categoria

    console.log("Carta sorteada:", currentCard); // Log da carta sorteada
    displayQuestion(currentCard);
    drawCardBtn.style.display = 'none';
    questionArea.style.display = 'block';
    feedbackMessage.textContent = '';
}

// Função para exibir a pergunta na tela
function displayQuestion(card) {
    console.log("Attempting to display card:", card); // Log da carta que está sendo exibida
    try {
        questionText.textContent = card.pergunta;
        optionsContainer.innerHTML = ''; // Limpa opções anteriores
        answerInput.style.display = 'none';
        submitAnswerBtn.style.display = 'block';

        // Lógica para exibir a imagem da pergunta
        if (card.imageUrl) {
            // Verifica se o caminho da imagem é um caminho de arquivo local (problema comum)
            if (card.imageUrl.startsWith("C:") || card.imageUrl.startsWith("file:///")) {
                console.error("ERRO: O caminho da imagem é um caminho de arquivo local e não pode ser carregado pelo navegador. Por favor, use um caminho relativo (ex: 'imagens/nome_da_imagem.png') no seu cartas.json. Caminho atual:", card.imageUrl);
                questionImage.style.display = 'none'; // Esconde a imagem se o caminho for inválido
                feedbackMessage.textContent = "Erro: Imagem não pode ser carregada. Verifique o caminho no cartas.json.";
            } else {
                questionImage.src = card.imageUrl;
                questionImage.style.display = 'block';
                console.log("Tentando carregar imagem:", card.imageUrl); // Log do caminho da imagem
            }
        } else {
            questionImage.style.display = 'none'; // Esconde a imagem se não houver URL
            console.log("Nenhuma imagem para esta carta.");
        }

        // O seu JSON usa "VF" para Verdadeiro/Falso, então mantive aqui.
        // Se você padronizar para "verdadeiro_falso" no JSON, pode mudar aqui também.
        if (card.tipo === 'multipla_escolha' || card.tipo === 'VF') {
            if (!card.opcoes) { // Verificação defensiva: se 'opcoes' não existe
                console.error("Card is missing 'opcoes' property:", card);
                feedbackMessage.textContent = "Erro: Opções da pergunta não encontradas. Verifique o console.";
                // Garante que a área da pergunta esteja visível para mostrar a mensagem de erro
                questionArea.style.display = 'block';
                questionText.textContent = "Erro ao carregar a pergunta.";
                optionsContainer.innerHTML = '';
                answerInput.style.display = 'none';
                submitAnswerBtn.style.display = 'none';
                drawCardBtn.style.display = 'block'; // Permite sortear nova carta
                drawCardBtn.textContent = 'Sortear Nova Carta';
                return; // Interrompe a execução da função
            }
            for (const key in card.opcoes) {
                const optionBtn = document.createElement('button');
                optionBtn.classList.add('option-btn');
                // CORREÇÃO: Para VF, exibe apenas o valor da opção (Verdadeiro/Falso)
                if (card.tipo === 'VF') {
                    optionBtn.textContent = card.opcoes[key];
                } else {
                    optionBtn.textContent = `${key.toUpperCase()}) ${card.opcoes[key]}`;
                }
                optionBtn.dataset.value = key;
                optionBtn.addEventListener('click', () => selectOption(key));
                optionsContainer.appendChild(optionBtn);
            }
        } else {
            // Para respostas abertas, se você decidir implementá-las
            answerInput.style.display = 'block';
            answerInput.value = '';
        }
    } catch (e) {
        console.error("Error displaying question card:", card, e); // Log detalhado do erro
        feedbackMessage.textContent = "Ocorreu um erro ao exibir a pergunta. Verifique o console para detalhes.";
        // Garante que a área da pergunta esteja visível para mostrar a mensagem de erro
        questionArea.style.display = 'block';
        questionText.textContent = "Erro ao carregar a pergunta.";
        optionsContainer.innerHTML = '';
        answerInput.style.display = 'none';
        submitAnswerBtn.style.display = 'none';
        drawCardBtn.style.display = 'block'; // Permite sortear nova carta
        drawCardBtn.textContent = 'Sortear Nova Carta';
    }
}

// Função para selecionar uma opção (para múltipla escolha/VF)
function selectOption(selectedAnswer) {
    checkAnswer(selectedAnswer);
}

// Função para verificar a resposta
function checkAnswer(playerAnswer) {
    const currentPlayer = players[currentPlayerIndex];
    let isCorrect = false;

    // O seu JSON usa "VF" para Verdadeiro/Falso, então mantive aqui.
    if (currentCard.tipo === 'multipla_escolha' || currentCard.tipo === 'VF') {
        isCorrect = (playerAnswer.toLowerCase() === currentCard.respostaCorreta.toLowerCase());
    } else {
        isCorrect = (playerAnswer.trim().toLowerCase() === currentCard.respostaCorreta.trim().toLowerCase());
    }

    if (isCorrect) {
        feedbackMessage.style.color = 'green';
        feedbackMessage.textContent = 'Resposta Correta! Avance!';
        currentPlayer.correctAnswers++; // Incrementa acertos
        audioCorrect.play(); // Toca som de acerto
        movePlayer(currentPlayer, currentCard.avanco);
    } else {
        feedbackMessage.style.color = 'red';
        feedbackMessage.textContent = 'Resposta Incorreta. Permaneça na casa.';
        currentPlayer.incorrectAnswers++; // Incrementa erros
        audioIncorrect.play(); // Toca som de erro
    }

    optionsContainer.innerHTML = '';
    answerInput.style.display = 'none';
    submitAnswerBtn.style.display = 'none';
    drawCardBtn.style.display = 'block';
    drawCardBtn.textContent = 'Próximo Turno';

    // REMOVIDO: setTimeout(nextTurn, 2000);
    // O próximo turno agora será acionado pelo clique no botão "Próximo Turno"
}

// Função para mover o jogador
function movePlayer(player, steps) {
    const boardKeys = Object.keys(boardPositions);
    // Adicionado log para verificar a ordem das chaves
    console.log("boardKeys:", boardKeys);
    const currentPosIndex = boardKeys.indexOf(player.position);
    let newPosIndex = currentPosIndex + steps;

    const finalPosIndex = boardKeys.indexOf("36"); // "FIM" agora é "36"

    // Log para depuração:
    console.log(`Jogador: ${player.name}`);
    console.log(`Posição atual: ${player.position} (Index: ${currentPosIndex})`);
    console.log(`Passos a avançar: ${steps}`);
    console.log(`Nova posição calculada (Index): ${newPosIndex}`);
    console.log(`Index da posição FINAL: ${finalPosIndex}`);


    if (newPosIndex >= finalPosIndex) {
        newPosIndex = finalPosIndex;
        player.position = "36"; // Jogador vai para a casa "36" (FIM)
        feedbackMessage.textContent += ` ${player.name} chegou ao FIM!`;

        // Limpa qualquer timeout pendente para o próximo turno, pois o jogo terminou
        if (nextTurnTimeoutId) {
            clearTimeout(nextTurnTimeoutId);
            nextTurnTimeoutId = null;
        }

        updatePlayerMarker(player); // Garante que o marcador esteja na posição final
        setTimeout(() => {
            showEndGameScreen(player); // Mostra a tela final do jogo
        }, 1000);
    } else {
        player.position = boardKeys[newPosIndex];
        updatePlayerMarker(player);
    }
}

// Função para passar o turno
function nextTurn() {
    console.log("nextTurn called"); // Log para confirmar a execução
    // Verifica se o array de jogadores está vazio (ex: jogo foi resetado por vitória)
    if (players.length === 0) {
        return; // Não faz nada se o array de jogadores estiver vazio
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnDisplay();
    questionArea.style.display = 'none';
    drawCardBtn.textContent = 'Sortear Carta';
    feedbackMessage.textContent = '';
    nextTurnTimeoutId = null; // Reseta o ID do timeout após ele ser executado
}

// --- Lógica de Setup do Jogo ---
function setupGame() {
    const numPlayers = parseInt(numPlayersSelect.value);
    players = []; // Limpa o array de jogadores
    for (let i = 0; i < numPlayers; i++) {
        players.push({
            id: i + 1,
            name: `P${i + 1}`, // Ou `Grupo ${i + 1}`
            position: "0", // Jogadores começam na casa "0" (INÍCIO)
            marker: document.getElementById(`player${i + 1}-marker`),
            correctAnswers: 0, // Inicializa contador de acertos
            incorrectAnswers: 0 // Inicializa contador de erros
        });
    }
    audioStartGame.play(); // Toca som de início de jogo
    initializeGame(); // Inicia o jogo com os jogadores selecionados
}

// --- Lógica da Tela Final do Jogo ---
function showEndGameScreen(winner) {
    gameAreaDiv.style.display = 'none';
    endGameScreenDiv.style.display = 'flex'; // Mostra a tela final

    winnerMessage.textContent = `${winner.name} venceu o jogo!`;
    winnerImage.style.display = 'block'; // Mostra a imagem do vencedor
    audioWinner.play(); // Toca o som de vencedor

    scoreSummaryList.innerHTML = ''; // Limpa a lista de scores

    players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${player.name}:</span>
            <span>Acertos: ${player.correctAnswers}</span>
            <span>Erros: ${player.incorrectAnswers}</span>
        `;
        scoreSummaryList.appendChild(listItem);
    });
}

// --- Lógica de Reiniciar Jogo ---
function restartGame() {
    endGameScreenDiv.style.display = 'none';
    gameSetupDiv.style.display = 'flex'; // Volta para a tela de configuração
    // O restante do reset de estado é feito em setupGame e initializeGame
}


// Event Listeners
drawCardBtn.addEventListener('click', () => {
    if (drawCardBtn.textContent === 'Sortear Carta') {
        drawCard();
    } else if (drawCardBtn.textContent === 'Próximo Turno') {
        nextTurn();
    } else if (drawCardBtn.textContent === 'Sortear Nova Carta') { // Caso de erro na carta
        drawCard();
    }
});

submitAnswerBtn.addEventListener('click', () => {
    if (answerInput.style.display === 'block') {
        checkAnswer(answerInput.value);
    }
});
startGameBtn.addEventListener('click', setupGame); // Evento para o botão Iniciar Jogo
restartGameBtn.addEventListener('click', restartGame); // Evento para o botão Reiniciar Jogo

// Carrega as cartas assim que a página é carregada, antes mesmo do setup do jogo
document.addEventListener('DOMContentLoaded', loadCards);