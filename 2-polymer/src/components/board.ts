import { LitElement, html, css, property, customElement } from "lit-element";

import "./add-dot-btn";
import "./table-row";

@customElement("four-dot-board")
export class Board extends LitElement {
  @property({ type: Array }) columns = Array.from(Array(12), (x,i) => i);

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      main {
        display: flex;
        justify-content: center;
      }

      table {
        border-spacing: 0px;
      }
      thead > tr {
        display: flex;
        justify-content: space-between;
      }
      tbody {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    `;
  }

  render() {
    return html`
      <main>
        <table>
          <thead>
            <tr>
              ${this.columns.map(x => {
                return html`
                  <th>
                    <add-dot-btn colIndex=${x}></add-dot-btn>
                  </th>
                `;
              })}
            </tr>
          </thead>
          <tbody>
            ${this.columns.map(i => {
              return html`
                <table-row columns=${JSON.stringify(this.columns)} rowIndex="${i}"></table-row>
              `;
            })}
          </tbody>
        </table>
      </main>
    `;
  }
}
