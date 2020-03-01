import { LitElement, html, css, property, customElement } from "lit-element";

import "./add-dot-btn";
import "./table-row";

@customElement("four-dot-board")
export class Board extends LitElement {
  @property({ type: Array }) board;
  @property({ type: String }) currentPlayer;
  @property({ type: Number }) counter = 0;

  static styles = css`
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

  setCurrentPlayer(name) {
    this.currentPlayer = name;
    alert("NOW");
  }

  render() {
    return html`
      <main>
        <table>
          <thead>
            <tr>
              ${this.board[0].map(x => {
                return html`
                  <th>
                    <add-dot-btn
                      colIndex="${x}"
                      currentPlayer="${this.currentPlayer}"
                      .setCurrentPlayer="${this.setCurrentPlayer}"
                    ></add-dot-btn>
                  </th>
                `;
              })}
            </tr>
          </thead>
          <tbody>
            ${this.board.map((cols, i) => {
              return html`
                <table-row
                  rowIndex="${i}"
                  columns=${JSON.stringify(cols)}
                ></table-row>
              `;
            })}
          </tbody>
        </table>
      </main>
    `;
  }
}
