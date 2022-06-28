const editPlayer1Btn = document.getElementById("edit-player1-btn");
const editPlayer2Btn = document.getElementById("edit-player2-btn");
const playerConfigOverlay = document.getElementById("overlay");
const backdrop = document.getElementById("backdrop");
const cancelBtn = document.getElementById("cancel-config");
const formElement = document.querySelector("form");
const errorOutput = document.getElementById("config-errors");
const clearName = document.getElementById("name");

let editedPlayer=0;
let activePlayer=0;
const players = [
{
    name: "",
    symbol: "X",
},
{
    name: "",
    symbol: "O",
}]

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let currentRound = 1;


const gameOver = document.getElementById("game-over");
let gameIsOver=false;





const startGame = document.getElementById("start-game");
const gameArea = document.getElementById("active-game");

const gameFields = document.querySelectorAll("#game-board li");
const activePlayerName = document.getElementById("active-player-name");




editPlayer1Btn.addEventListener('click',openPlayerConfig);editPlayer2Btn.addEventListener('click',openPlayerConfig);

cancelBtn.addEventListener('click',closePlayerConfig);
backdrop.addEventListener('click',closePlayerConfig); 

formElement.addEventListener('submit',handleSubmit);

startGame.addEventListener('click',startGameFunc);

for (const gameField of gameFields) {
    gameField.addEventListener('click',handleGameFields);
    //used to add event listener to each game field on the game board and to handle the click event on each game field and to call the handleGameFields function when the user clicks on the game field and to add the disabled class to the game field when the user clicks on the game field to prevent the user from clicking on the game field twice and to add the disabled class to the game field when the user clicks on the game field to prevent the user from clicking on the game field twice
}