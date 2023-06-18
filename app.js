const startGameBtn = document.getElementById("start-game-btn");

const PIEDRA = "PIEDRA";
const PAPEL = "PAPEL";
const TIJERAS = "TIJERAS";
const DEFAULT_USER_CHOICE = PIEDRA;
const RESULT_DRAW = "EMPATE";
const RESULT_PLAYER_WINS = "GANÓ EL JUGADOR";
const RESULT_COMPUTER_WINS = "GANÓ LA COMPUTADORA";

//let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${PIEDRA}, ${PAPEL} or ${TIJERAS}?`,
    ""
  ).toUpperCase();
  if (selection !== PIEDRA && selection !== PAPEL && selection !== TIJERAS) {
    alert(`Respuesta invalida! elegimos ${DEFAULT_USER_CHOICE} por ti!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return PIEDRA;
  } else if (randomValue < 0.67) {
    return PAPEL;
  } else {
    return TIJERAS;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === TIJERAS && pChoice === PAPEL) {
    return RESULT_COMPUTER_WINS;
  } else if (cChoice === TIJERAS && pChoice === PIEDRA) {
    return RESULT_PLAYER_WINS;
  } else if (cChoice === PIEDRA && pChoice === PAPEL) {
    return RESULT_PLAYER_WINS;
  } else if (cChoice === PIEDRA && pChoice === TIJERAS) {
    return RESULT_COMPUTER_WINS;
  } else if (cChoice === PAPEL && pChoice === PIEDRA) {
    return RESULT_COMPUTER_WINS;
  } else if (cChoice === PAPEL && pChoice === TIJERAS) {
    return RESULT_PLAYER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  //  gameIsRunning = true;
  console.log("El juego esta comenzando...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `Elegiste ${playerChoice} y la computadora eligió ${computerChoice} entonces: `;
  if (winner === RESULT_DRAW) {
    message = message + `EMPATARON`;
  } else if (winner === RESULT_COMPUTER_WINS) {
    message = message + `GANÓ LA COMPUTADORA`;
  } else {
    message = message + `GANASTE`;
  }
  alert(message);
  console.log(
    `La computadora eligió ${computerChoice} y el jugador eligió ${playerChoice}`
  );
  console.log(winner);
  //  gameIsRunning = false;
});
