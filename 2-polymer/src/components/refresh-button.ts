import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement("refresh-button")
export class RefreshButton extends LitElement {
  @property({ type: String, attribute: true }) backgroundColor = "green";

  static styles = css`
    :host {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      color: var(--themeColor);
    }
    :host:hover {
      background-color: #ddd;
      border: 1px solid #ddd;
    }
    :host:active {
      background-color: #999;
      border: 1px solid #999;
    }
  `;

  restartGame() {
    alert("TODO restartGame()");
  }

  render() {
    return html`
      <button type="button" @click="${this.restartGame}">
        Restart ${this.backgroundColor}
      </button>
    `;
  }
}
