import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("table-row")
export class TableRow extends LitElement {
  @property({ type: Array}) columns;

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      td {
        width: 45px;
        max-width: 45px;
        height: 45px;
        max-height: 45px;
        border: 1px solid #000;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <tr>
        ${this.columns.map(() => {
          return html`
            <td></td>
          `
        })}
      </tr>
    `;
  }
}
