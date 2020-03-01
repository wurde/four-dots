import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("four-dot-header")
export class Header extends LitElement {
  @property({ type: Function }) restartGame;

  static get styles() {
    return css`
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
