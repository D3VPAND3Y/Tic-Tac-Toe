function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    'You won!!! <span id="winner-name">Player Name</span>';
  gameOver.style.display = "none";
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      gameData[row][col] = 0;
      gameFields[row * 3 + col].textContent = "";
      gameFields[row * 3 + col].classList.remove("disabled");
    }
  }
}




function startGameFunc() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter the name of player");
    //we will check for valid username input by the user
    return;
  }

  resetGame();
  activePlayerName.innerHTML = players[activePlayer].name;
  gameArea.style.display = "block";
}



function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayerName.innerHTML = players[activePlayer].name;
  //to switch the active player to the other player after each turn and to display the name of the active player on the screen 
}



function handleGameFields(event) {
  if (gameIsOver) {
    return;
    //used to prevent the user from clicking on the game board after the game is over
  }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] !== 0) {
     //used to prevent the user from clicking on the game board twice
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  //1-for first player 2-for second player to store the value of player in the gameData array (0-for empty) (1-for first player) (2-for second player)



 const winner = checkWinner();
 //winner is -1 if it is a tie and 0 if no one has won yet and 1-for first player 2-for second player if someone has won the game 
  if (winner !== 0) {
    endGame(winner);
  }

  currentRound++;
  switchPlayer();
}




function checkWinner() {
  //checking for horizontal win
  for (let row = 0; row < 3; row++) {
    if (
      gameData[row][0] !== 0 &&
      gameData[row][0] === gameData[row][1] &&
      gameData[row][0] === gameData[row][2]
    ) {
      return gameData[row][0];
    }
  }
  //checking for vertical win
  for (let col = 0; col < 3; col++) {
    if (
      gameData[0][col] !== 0 &&
      gameData[0][col] === gameData[1][col] &&
      gameData[0][col] === gameData[2][col]
    ) {
      return gameData[0][col];
    }
  }
  //checking for diagonal win
  if (
    gameData[0][0] !== 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] !== 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[0][2] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}



function endGame(winnerId) {
  gameIsOver = true;

  gameOver.style.display = "block";
  //displaying the game over screen with the winner name and the option to play again 
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;//to store the name of the winner
    const winnerSymbol = players[winnerId - 1].symbol;
    gameOver.firstElementChild.firstElementChild.innerHTML = `Player ${winnerId} :- ${winnerName}`;//to print the winner name
  } else {
    gameOver.firstElementChild.innerHTML = "It's a tie";
  }
}


