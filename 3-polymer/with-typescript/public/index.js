"use strict";
/**
 * Dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.js");
/**
 * Wait for the DOM to load content.
 */
window.addEventListener("DOMContentLoaded", function () {
    // Initialize the application.
    var app = document.createElement("pf-app");
    // Mount the application to the DOM.
    document.getElementById("app").replaceWith(app);
});
