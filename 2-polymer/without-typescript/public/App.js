/**
 * Dependencies
 */

import {
  LitElement,
  html,
  css,
  property,
  customElement
} from "https://unpkg.com/lit-element/lit-element.js?module";

/**
 * Define App.
 */

class App extends LitElement {
  constructor() {
    super();
    this.currentPlayer = "blue";
  }

  static get properties() {
    return {
      currentPlayer: { type: String }
    };
  }

  static get styles() {
    return css`
      .mood {
        color: green;
      }
    `;
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <p>Hello, <span class="mood">${this.currentPlayer}</span>!</p>
    `;
  }
}

/**
 * Define the pf-app custom element.
 */

customElements.define("pf-app", App);
