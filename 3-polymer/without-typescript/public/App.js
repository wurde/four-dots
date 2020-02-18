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
  static get properties() {
    return {
      name: { type: String }
    };
  }

  static get styles() {
    return css`
      .mood {
        color: green;
      }
    `;
  }

  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <p>Hello, <span class="mood">World</span>!</p>
    `;
  }
}

/**
 * Define the pf-app custom element.
 */

customElements.define("pf-app", App);
