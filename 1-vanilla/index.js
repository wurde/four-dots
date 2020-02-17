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

function updateGamestate({ colIndex, player }) {
  const es = document.getElementById("event-stream");
  let board = JSON.parse(es.dataset.board);
  let colLength = board[colIndex].length;
  let prevIndex = 0;

  for (let i = 0; i < colLength; i++) {
    if (board[colIndex][i]) {
      board[colIndex][prevIndex] = player;
      break;
    }
    if (i == colLength - 1) {
      board[colIndex][i] = player;
    }
    prevIndex = i;
  }
  return board;
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

    es.dataset.board = JSON.stringify(updateGamestate({ colIndex, player }));
    // Update cell with cell-red or cell-black class.
    // If column filled, then emit event

    // Check if GameOver, if true then emit event.
  });

  es.addEventListener("ColumnFilled", e => {
    // Set AddDotBtn to disabled.
    alert("ColumnFilled");
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
