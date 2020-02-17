/**
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
  const es = document.getElementById("event-stream");
  const ds = document.getElementById("data-store");

  ds.dataset.currentPlayer = "red";
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

  ds.dataset.currentPlayer = player == "red" ?  "black" : "red";
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
    if (x == player) {
      count++;
      break;
    };
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
    if (!x) break;
    if (x == player) {
      count++;
    }
    leftCounter--;
  }
  let rightCounter = colIndex + 1;
  while (rightCounter <= 11) {
    let x = board[rightCounter][rowIndex];
    if (!x) break;
    if (x == player) {
      count++;
    }
    rightCounter++;
  }
  if (count == 4) {
    dispatch("GameOver", { winner: player });
    return;
  }

  // Check diagonalLeft
  // Check diagonalRight
}

/**
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
    // Set all AddDotBtns to disabled.
    // Toggle visibility on dismissible WinnerAlert w confetti.
    alert("GameOver");
  })
}

/**
 * Wait for DOM to fully load content.
 */

document.addEventListener("DOMContentLoaded", initGameState);
