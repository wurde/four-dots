import { LitElement, html, css, property, customElement } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement("table-row")
export class TableRow extends LitElement {
  @property({ type: Array }) columns;
  @property({ type: Number }) rowIndex;

  static styles = css`
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

    .cell-blue {
      background-color: #71acda;
    }

    .cell-black {
      background-color: black;
    }
  `;

  render() {
    return html`
      <tr>
        ${this.columns.map((data, i) => {
          return html`
            <td
              class=${classMap({
                "cell-blue": data == "blue",
                "cell-black": data == "black"
              })}
            ></td>
          `;
        })}
      </tr>
    `;
  }
}
