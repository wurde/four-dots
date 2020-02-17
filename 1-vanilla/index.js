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

  let buildEvent = new CustomEvent("AddDot", {
    detail: {
      target,
      colIndex
    }
  });

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

    // Update game state.
    // Update DOM.
  });
}

/**
 * Wait for DOM to fully load content.
 */

document.addEventListener("DOMContentLoaded", initGameState);
