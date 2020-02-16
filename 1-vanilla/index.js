/**
 * Define helpers
 */

function sayHello() {
  alert("Hello");
}

function addDot(colIndex) {
  alert(colIndex);
}

/**
 * Initialize game state
 */

function initGameState() {
  /**
   * Gotchas: I struggled to create a matrix object.
   */
  let state = {};
  state["board"] = []

  for (let i = 0; i < 12; i++) {
    state["board"].push(new Array(12));
  }
  console.log(state["board"].length)
}

document.addEventListener("DOMContentLoaded", initGameState);
