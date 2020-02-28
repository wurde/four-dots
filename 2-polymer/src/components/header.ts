import { LitElement, html, customElement } from "lit-element";

@customElement("four-dot-header")
export class Header extends LitElement {
  restartGame() {
    alert("restart GAME")
  }

  render() {
    return html`
      <header>
        <h1>Four Dots</h1>
        <button type="button" @click="${this.restartGame}">
          Restart
        </button>
      </header>
    `;
  }
}
