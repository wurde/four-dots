import { LitElement, html, css, customElement } from "lit-element";

@customElement("four-dot-header")
export class Header extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    button {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #ddd;
      border: 1px solid #ddd;
    }
    button:active {
      background-color: #999;
      border: 1px solid #999;
    }
  `;

  restartGame() {
    this.dispatchEvent(
      new CustomEvent("restart-game", {
        bubbles: true,
        composed: true
      })
    );
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
