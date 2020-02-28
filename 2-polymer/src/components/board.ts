import { LitElement, html, css, property, customElement } from "lit-element";

import "./add-dot-btn";

@customElement("four-dot-board")
export class Board extends LitElement {
  @property({ type: Array }) columns = Array.from(Array(12), (x,i) => i);

  static get styles() {
    return css`
      main {
        display: grid;
        grid-template-columns: 10% auto 10%;
      }
    `
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
          </tbody>
        </table>
      </main>
    `;
  }
}
