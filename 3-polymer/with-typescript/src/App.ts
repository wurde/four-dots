/**
 * Dependencies
 */

import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

/**
 * Define and export the App.
 */

@customElement("pf-app")
export class App extends LitElement {
  @property() name = "World";

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
