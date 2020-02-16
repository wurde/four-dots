/**
 * Define helpers
 */

function sayHello() {
  alert("Hello");
}

function addDot(e) {
  let target = e.target;
  let colIndex = target.dataset.colIndex;
  let buildEvent = new CustomEvent("build", { detail: colIndex });
  target.dispatchEvent(buildEvent);
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

  let btns = document.querySelectorAll(".add-dot-btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = '1px solid red';
    btns[i].addEventListener("build", e => {
      alert(JSON.stringify(e.detail));
    });
  }
}

document.addEventListener("DOMContentLoaded", initGameState);
