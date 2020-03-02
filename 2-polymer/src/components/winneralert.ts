import { LitElement, html, css, property, customElement } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";

@customElement("four-dot-winneralert")
export class WinnerAlert extends LitElement {
  @property({ type: String }) winner;

  static styles = css`
    div {
      position: absolute;
      left: 0;
      right: 0;
      width: 200px;
      padding: 15px;
      margin-left: auto;
      margin-right: auto;
      background-color: #fcfbfb;
      border: 10px double #e3ddd8;
      color: #333;
      font-size: 18px;
      text-align: center;
    }

    .winner-player {
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <div style=${styleMap({ visibility: this.winner ? "visible" : "hidden" })}>
        Congratulations! <br /><span class="winner-player">${this.winner} player wins</span>
      </div>
    `;
  }
}
