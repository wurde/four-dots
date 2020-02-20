import { LitElement, html, css, customElement } from 'lit-element';

@customElement("refresh-button")
export class RefreshButton extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
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
  }

  restartGame() {
    alert("TODO restartGame()");
    // const alert = document.querySelector(".winner-alert");
    // alert.style.visibility = "hidden";

    // const es = document.getElementById("event-stream");
    // const ds = document.getElementById("data-store");

    // ds.dataset.currentPlayer = "blue";
    // ds.dataset.board = JSON.stringify(createBoard());

    // Array.from(document.getElementsByClassName("cell")).forEach(
    //   cell => (cell.className = "cell")
    // );

    // Array.from(document.getElementsByClassName("add-dot-btn")).forEach(
    //   btn => (btn.disabled = false)
    // );
  }

  render() {
    return html`
      <button type="button" @click="${this.restartGame}">
        Restart
      </button>
    `;
  }
}
