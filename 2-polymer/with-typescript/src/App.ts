/**
 * Dependencies
 */

import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./components/ButtonCounter";
import "./components/ConditionalElement";
// import "./components";
// import "./data-store";
// import "./event-stream";

/**
 * Define and export the App.
 *
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement("pf-app")
export class App extends LitElement {
  @property({ type: Array }) greetings = [
    "Hello!",
    "Hi!",
    "Welcome.",
    "Greetings.",
  ];

  render() {
    return html`
      <btn-counter></btn-counter>

      <conditional-el></conditional-el>

      <ul>
        ${this.greetings.map(g => html`<li>${g}</li>`)}
      </ul>
    `;
  }
}
// <event-stream />
// <data-store />
// <winner-alert />
// <game-header />
// <main-content />
