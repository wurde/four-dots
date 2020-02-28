import { LitElement, html, customElement } from "lit-element";

@customElement("four-dot-header")
export class Header extends LitElement {
  render() {
    return html`
      <header>
        <h1>Four Dots</h1>
      </header>
    `;
  }
}
