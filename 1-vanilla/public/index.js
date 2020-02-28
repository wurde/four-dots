
 * Define helpers
 */

function dispatch(type, data) {
  const es = document.getElementById("event-stream");
  if (!es) return;

  es.dispatchEvent(
    new CustomEvent(type, {
      detail: data
    })
  );
}

function createBoard() {
  const size = 12;
  let board = [];
  for (let i = 0; i < size; i++) {
    board.push(new Array(size));
  }
  return board;
}

function restartGame() {
  const alert = document.querySelector(".winner-alert");
  alert.style.visibility = "hidden";

  const es = document.getElementById("event-stream");
  const ds = document.getElementById("data-store");

  ds.dataset.currentPlayer = "blue";
  ds.dataset.board = JSON.stringify(createBoard());

  Array.from(document.getElementsByClassName("cell"))
  .forEach(cell => cell.className = "cell");

  Array.from(document.getElementsByClassName("add-dot-btn"))
  .forEach(btn => btn.disabled = false);
}

function addDot() {
  const es = document.getElementById("event-stream");
  const ds = document.getElementById("data-store");

  const target = event.target;
  const colIndex = target.dataset.colIndex;
  const player = ds.dataset.currentPlayer;

  ds.dataset.currentPlayer = player == "blue" ?  "black" : "blue";
  dispatch("AddDot", { target, player, colIndex });
}

function findRowIndex({ board, colIndex }) {
  let colLength = board[colIndex].length;
  let rowIndex = 0;

  for (let i = 0; i < colLength; i++) {
    if (board[colIndex][i]) {
      return rowIndex;
    }

    rowIndex = i;

    if (rowIndex == colLength - 1) {
      return rowIndex;
    }
  }
}

function updateGamestate({ colIndex, player }) {
  const ds = document.getElementById("data-store");

  let board = JSON.parse(ds.dataset.board);
  let rowIndex = findRowIndex({ board, colIndex });
  board[colIndex][rowIndex] = player;
  ds.dataset.board = JSON.stringify(board);

  let cell = document.querySelector(`.cell[data-col="${colIndex}"][data-row="${rowIndex}"]`)
  cell.classList.add(`cell-${player}`);

  if (rowIndex == 0) {
    dispatch("ColumnFilled", { colIndex });
  }
  dispatch("DotAdded", { colIndex, rowIndex, player });
}

function checkIfGameOver(e) {
  const colIndex = e.detail.colIndex;
  const rowIndex = e.detail.rowIndex;
  const player = e.detail.player;

  const ds = document.getElementById("data-store");
  const board = JSON.parse(ds.dataset.board);
  let count = 1;

  // Check vertical
  let counter = rowIndex + 1;
  while (counter <= 11) {
    let x = board[colIndex][counter];
    if (!x || x != player) break;
    count++;
    counter++;
  }
  if (count == 4) {
    dispatch("GameOver", { winner: player });
    return;
  }

  // Check horizontal
  count = 1;
  let leftCounter = colIndex - 1;
  while (leftCounter >= 0) {
    let x = board[leftCounter][rowIndex];
    if (!x || x != player) break;
    count++;
    leftCounter--;
  }
  let rightCounter = colIndex + 1;
  while (rightCounter <= 11) {
    let x = board[rightCounter][rowIndex];
    if (!x || x != player) break;
    count++;
    rightCounter++;
  }
  if (count == 4) {
    dispatch("GameOver", { winner: player });
    return;
  }

  // Check diagonalLeft
  count = 1;
  leftCounter = colIndex - 1;
  let topCounter = rowIndex - 1;
  while (leftCounter >= 0 && topCounter >= 0) {
    let x = board[leftCounter][topCounter];
    if (!x || x != player) break;
    count++;
    leftCounter--;
    topCounter--;
  }
  rightCounter = colIndex + 1;
  let bottomCounter = rowIndex + 1;
  while (rightCounter <= 11 && bottomCounter <= 11) {
    let x = board[rightCounter][bottomCounter];
    if (!x || x != player) break;
    count++;
    rightCounter++;
    bottomCounter++;
  }
  if (count == 4) {
    dispatch("GameOver", { winner: player });
    return;
  }

  // Check diagonalRight
  count = 1;
  leftCounter = colIndex - 1;
  bottomCounter = rowIndex + 1;
  while (leftCounter >= 0 && bottomCounter <= 11) {
    let x = board[leftCounter][bottomCounter];
    if (!x || x != player) break;
    count++;
    leftCounter--;
    bottomCounter++;
  }
  topCounter = rowIndex - 1;
  rightCounter = colIndex + 1;
  while (rightCounter <= 11 && topCounter >= 0) {
    let x = board[rightCounter][topCounter];
    if (!x || x != player) break;
    count++;
    topCounter--;
    rightCounter++;
  }
  if (count == 4) {
    dispatch("GameOver", { winner: player });
    return;
  }
}

function rewardWinner(player) {
  let alert = document.querySelector(".winner-alert");
  let alertText = document.querySelector(".winner-player");
  alertText.textContent = `${player} player wins`;
  alert.style.visibility = "visible";
}


 * Initialize game state
 */

function initGameState() {
  restartGame();

  const es = document.getElementById("event-stream");
  const ds = document.getElementById("data-store");

  es.addEventListener("AddDot", e => {
    const colIndex = Number.parseInt(e.detail.colIndex);
    const player = e.detail.player;

    updateGamestate({ colIndex, player });
  });

  es.addEventListener("ColumnFilled", e => {
    let colIndex = e.detail.colIndex;
    let btn = document.querySelector(
      `.add-dot-btn[data-col-index="${colIndex}"]`
    );
    btn.disabled = true;
  });

  es.addEventListener("DotAdded", checkIfGameOver);

  es.addEventListener("GameOver", e => {
    Array.from(document.getElementsByClassName("add-dot-btn"))
    .forEach(btn => btn.disabled = true);

    rewardWinner(e.detail.winner);
  })
}


 * Wait for DOM to fully load content.
 */

document.addEventListener("DOMContentLoaded", initGameState);
