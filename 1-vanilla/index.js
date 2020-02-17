/**
 * Define helpers
 */

function sayHello() {
  alert("Hello");
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

  let state = {};
  state["board"] = []

  for (let i = 0; i < 12; i++) {
    state["board"].push(new Array(12));
  }

  es.addEventListener("AddDot", e => {
    e.detail.target.style.backgroundColor = "red";
  });
}

/**
 * Wait for DOM to fully load content.
 */

document.addEventListener("DOMContentLoaded", initGameState);
