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

/**
 * Initialize game state
 */

function initGameState() {
  const es = document.getElementById("event-stream");
  es.dataset.currentPlayer = "red";

  es.dataset.board = createBoard();

  es.addEventListener("AddDot", e => {
    const colIndex = e.detail.colIndex;
    const player = e.detail.player;

    alert(JSON.stringify({colIndex, player}))

    // Update game state.
    // Update DOM.
  });
}

/**
 * Wait for DOM to fully load content.
 */

document.addEventListener("DOMContentLoaded", initGameState);
