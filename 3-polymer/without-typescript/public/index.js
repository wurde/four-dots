/**
 * Dependencies
 */

import "./App.js";

/**
 * Wait for the DOM to load content.
 */

window.addEventListener("DOMContentLoaded", () => {
  // Initialize the application.
  const app = document.createElement("pf-app");

  // Mount the application to the DOM.
  document.getElementById("app").replaceWith(app);
});
