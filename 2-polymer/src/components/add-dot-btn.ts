import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("add-dot-btn")
export class AddDotBtn extends LitElement {
  @property({ type: Number }) colIndex;
  @property({ type: String }) currentPlayer;
  @property({ type: Function }) setCurrentPlayer;

  static styles = css`
    button {
      background-color: #e9f6e9;
      padding: 6px;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 10px;
      border: 1px solid #24ae24;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
    }
    button:hover {
      background-color: #24ae24;
      border: 1px solid #24ae24;
      color: #fff;
    }
    button:active {
      background-color: #1c8b1c;
      border: 1px solid #1c8b1c;
      color: #fff;
    }
    button:disabled,
    button[disabled] {
      background-color: #eee;
      border: 1px solid #ddd;
      color: #999;
      cursor: inherit;
    }
  `;

  addDot() {
    this.dispatchEvent(
      new CustomEvent("add-dot", {
        bubbles: true,
        composed: true,
        detail: {
          currentPlayer: this.currentPlayer,
          colIndex: this.colIndex
        }
      })
    );
    this.dispatchEvent(
      new CustomEvent("change-player", {
        bubbles: true,
        composed: true,
        detail: {
          currentPlayer: this.currentPlayer == "blue" ? "black" : "blue"
        }
      })
    );
  }

  render() {
    return html`
      <button @click="${this.addDot}">+</button>
    `;
  }
}
