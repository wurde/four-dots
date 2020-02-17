/**
 * Define helpers
 */

function createBoard() {
  let board = [];
  for (let i = 0; i < 12; i++) {
    board.push(new Array(12));
  }
  return board;
}

function restartGame() {
  const es = document.getElementById("event-stream");
  es.dataset.board = createBoard();

  const els = Array.from(document.getElementsByClassName("cell"));
  els.forEach(cell => cell.className = "cell");
}

function addDot() {
  const es = document.getElementById("event-stream");
  const target = event.target;
  const colIndex = target.dataset.colIndex;
  const player = es.dataset.currentPlayer;

  let buildEvent = new CustomEvent("AddDot", {
    detail: {
      target,
      player,
      colIndex
    }
  });

  if (player == "red") {
    es.dataset.currentPlayer = "black";
  } else {
    es.dataset.currentPlayer = "red";
  }

  es.dispatchEvent(buildEvent);
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
  const es = document.getElementById("event-stream");
  let board = JSON.parse(es.dataset.board);

  let rowIndex = findRowIndex({ board, colIndex });
  board[colIndex][rowIndex] = player;
  es.dataset.board = JSON.stringify(board);

  let cell = document.querySelector(`.cell[data-col="${colIndex}"][data-row="${rowIndex}"]`)
  cell.classList.add(`cell-${player}`);

  if (rowIndex == 0) {
    es.dispatchEvent(
      new CustomEvent("ColumnFilled", {
        detail: {
          colIndex
        }
      })
    );
  }
}

function checkIfGameOver() {
  // Check if GameOver, if true then emit event { winner }.
}

/**
 * Initialize game state
 */

function initGameState() {
  const es = document.getElementById("event-stream");

  es.dataset.currentPlayer = "red";
  es.dataset.board = JSON.stringify(createBoard());

  es.addEventListener("AddDot", e => {
    const colIndex = Number.parseInt(e.detail.colIndex);
    const player = e.detail.player;

    updateGamestate({ colIndex, player });
    checkIfGameOver();
  });

  es.addEventListener("ColumnFilled", e => {
    let colIndex = e.detail.colIndex;
    let btn = document.querySelector(
      `.add-dot-btn[data-col-index="${colIndex}"]`
    );
    btn.disabled = true;
  })

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
