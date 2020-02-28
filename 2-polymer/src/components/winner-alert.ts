import { LitElement, html, css, customElement } from 'lit-element';

@customElement("winner-alert")
export class WinnerAlert extends LitElement {
  static get styles() {
    return css`
      :host {
        visibility: hidden;
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
  }

  render() {
    return html`
      <div>
        Congratulations! <br /><span class="winner-player"></span>
      </div>
    `;
  }
}
