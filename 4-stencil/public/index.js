/**
 * Dependencies
 */

import App from "./App.js";

/**
 * Wait for the DOM to load content.
 */

window.addEventListener("DOMContentLoaded", () => {
  // Define the application.
  customElements.define("pf-app", App);
  const app = document.createElement("pf-app");

  // Mount the application to the DOM.
  document.getElementById("app").replaceWith(app);
});
